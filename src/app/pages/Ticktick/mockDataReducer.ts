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
  })

export default globalReducer;
