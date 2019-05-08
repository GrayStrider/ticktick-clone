import { createSelector } from 'reselect';
import { getData, getSelectedList, getTasks } from 'app/selectors-global';
import { filter } from 'lodash';
import { GlobalState } from 'app/types/GlobalState';
import { IList, ITask, TTasks } from 'app/types/types';

export const getCurrentListTasks = createSelector(
  getData,
  getSelectedList,
  getTasks,
  (
    data: Pick<GlobalState, 'data'>,
    selectedList: IList,
    tasks: TTasks) =>
    filter(tasks, (task) => (
        data[selectedList.type][selectedList.id].tasks
          .includes(task.id)
      )
    )
);
