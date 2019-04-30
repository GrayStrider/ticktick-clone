import produce from 'immer';
import { Chance } from 'chance';
import { without } from 'lodash';
import { SELECT_TASK, TOGGLE_DONE } from './components/Task/actions';
import { ADD_TASK } from './components/InputNewTask/actions';
import { SELECT_LIST, SELECT_TAB } from './components/Lists/actions';
import generateMockData from './generateMockData';
import { ADD_TASK_TO_LIST, DELETE_TASK_FROM_LIST, MODIFY_TASK } from './components/actions';
import { SORT_LIST } from './components/TaskList/TaskListHeader/actions';

const chance = new Chance(Math.random);

const [tasks, tags, groups] = [{}, {}, {}];
generateMockData([tasks, tags, groups]);


const custom = {
  0: {
    listID: 0,
    name: 'Today & overdue',
    type: 'custom',
    tasks: [],
  },
};
const predefinedGroups = {
  'inbox': {
    tasks: [],
    displayed: true,
  },
};

const insertableLists = {
  groups,
  tags,
  custom,
};
export const menuCategories = Object.keys(insertableLists);

const lists = {
  predefinedGroups,
  selectedTab: menuCategories[0],
  selectedList: {
    type: 'custom',
    name: 'Today & overdue',
    listID: 0,
  },
};

const initialState = {
  tasks,
  lists,
  insertableLists,
  tasksList: {
    selectedTaskID: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const globalReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_TASK: {
        const date = new Date()
        const time = date.getTime()
        const guid = chance.guid();
        // insert new task into database
        draft.tasks[guid] = {
          taskID: guid,
          taskContent: action.payload.taskContent,
          description: '',
          priority: action.payload.priority,
          completed: false,
          timeCreated: time,
          timeLastModified: time
        };
        draft.insertableLists
          [action.payload.selectedList.type]
          [action.payload.selectedList.listID].tasks
          .push(guid);
        // @ts-ignore
        draft.tasksList.selectedTaskID = guid;
        break;
      }
      case MODIFY_TASK: {
        const date = new Date()
        draft.tasks[action.payload.taskID] = {
          ...draft.tasks[action.payload.taskID],
          ...action.payload.data,
          timeLastModified: date.getTime()
        };
        break;
      }

      case TOGGLE_DONE:
        draft.tasks[action.payload].completed =
          !draft.tasks[action.payload].completed;
        break; //TODO merge with MODIFY

      case SELECT_TASK:
        draft.tasksList.selectedTaskID = action.payload;
        break;
      case SELECT_TAB:
        draft.lists.selectedTab = action.payload;
        break;
      case SELECT_LIST:
        draft.lists.selectedList = action.payload;
        break;

      case SORT_LIST:
        /**
         * # Use nested switch
         * # Sorting is kept for individual lists (sorting list's taskIDs)
         * # Drag-n-drop task sorting within the sort types, keep when sorting
         * # Perhaps, there's no need to worry about manual sorting order breaking
         * after applying new sort, because since sort criteria for these sorted
         * items would be the same, and therefore their order won't change.
         * - payload: listID to sort
         * - payload: sort type {
         *   - priority
         *   - list
         *   - tag
         *   - date created
         *   - by title // TODO replace "content" with "title"
         * }
         *
         **/
        switch (action.payload.sortType) {
          case 'priority':
            draft.insertableLists
              [action.payload.selectedList.type]
              [action.payload.selectedList.listID].tasks =
              draft.insertableLists
                [action.payload.selectedList.type]
                [action.payload.selectedList.listID].tasks
                .sort((a, b) => draft.tasks[b].priority - draft.tasks[a].priority)
           break;
          case 'timeAdded':
            draft.insertableLists
              [action.payload.selectedList.type]
              [action.payload.selectedList.listID].tasks =
              draft.insertableLists
                [action.payload.selectedList.type]
                [action.payload.selectedList.listID].tasks
                .sort((a, b) => draft.tasks[b].timeCreated - draft.tasks[a].timeCreated)
            break;
        }
        break;
      case DELETE_TASK_FROM_LIST:
        draft.insertableLists
          [action.payload.type]
          [action.payload.listID].tasks =

          without(draft.insertableLists
            [action.payload.type]
            [action.payload.listID].tasks, action.payload.taskID)
        break
      case ADD_TASK_TO_LIST:
        draft.insertableLists
          [action.payload.type]
          [action.payload.listID].tasks
          .push(action.payload.taskID)
        break
    }
  });

export default globalReducer;
