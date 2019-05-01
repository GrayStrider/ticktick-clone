import { ETabs, IList, TCustomLists, TListID, TLists, TTags, TTaskID, TTasks } from 'app/pages/Ticktick/types/types';


export interface GlobalState {
  data: {
    tasks: TTasks
    tags: TTags
    lists: TLists,
    customLists: TCustomLists
  },

  ui: {
    selectedList: object
    selectedTab: ETabs
    selectedTask: TTaskID | null
  },

  defaultLists: {
    inbox: {
      id: 'inbox',
      name: 'Inbox',
      type: 'inbox'
    },
    nextSevenDays: {
      id: 'sevenDays',
      name: 'Next 7 Days',
      type: 'sevenDays'
    }
  }
}
