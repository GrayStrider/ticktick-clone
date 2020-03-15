import { ETabs } from 'app/types/types';
import { RootState } from 'app/reducers';

export const getTasks = (state: RootState) => state.ticktick.data.tasks;
export const getTags = (state: RootState) => state.ticktick.data.tags;
export const getSelectedList = (state: RootState) => state.ticktick.ui.selectedList;
export const getTaskLists = (state: RootState) => ({
  [ETabs.lists]: state.ticktick.data.lists,
  [ETabs.tags]: state.ticktick.data.tags,
  [ETabs.custom]: state.ticktick.data.custom,
});
