import { createSelector } from 'reselect';
import { getTaskLists, getSelectedList, getTasks } from 'app/selectors-global';
import { filter, forEach } from 'lodash';
import { IList, TTasks } from 'app/types/types';

export const getCurrentListTasks = createSelector(
  getTaskLists,
  getSelectedList,
  getTasks,
  (
    data,
    selectedList: IList,
    tasks: TTasks) =>
    filter(tasks, (task) => (
        data[selectedList.type][selectedList.id].tasks
          .includes(task.id)
      )
    )
);

let filtered = {};
export const getCurrentListTasks2 = createSelector(
  getTaskLists,
  getSelectedList,
  getTasks,
  (
    data,
    selectedList: IList,
    tasks: TTasks) => {
    filtered = {};
    forEach(data[selectedList.type][selectedList.id].tasks,
      (taskID) => {
        filtered[taskID] = tasks[taskID];
      }
    );
    return filtered;
  }
)
