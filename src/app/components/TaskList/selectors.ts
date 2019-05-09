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

const mapStateToProps = (state) => ({
  filteredTasks: function filteredTasks() {
    const filtered = {};
    forEach(state.ticktick.data
        [state.ticktick.ui.selectedList.type]
        [state.ticktick.ui.selectedList.id].tasks,
      (taskID) => {filtered[taskID] =
        state.ticktick.data.tasks[taskID];}
    );
    return filtered;
  }})
