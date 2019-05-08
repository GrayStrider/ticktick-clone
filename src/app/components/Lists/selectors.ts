import { createSelector } from 'reselect';
import { RootState } from 'app/reducers';


export const getLists = createSelector(
  (state: RootState) => state.ticktick.data.tags,
  (state: RootState) => state.ticktick.data.lists,
  (state: RootState) => state.ticktick.data.custom,
  (state: RootState) => state.ticktick.data.defaultLists,
  (tags, lists, custom, defaultLists) => ({
    tags: tags,
    lists: lists,
    custom: custom,
    defaultLists: defaultLists
  })

)

