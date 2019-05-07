import { ETabs, TCustomLists, TLists, TTags, TTaskID, TTasks } from 'app/types/types';


export interface GlobalState {
  data: {
    tasks: TTasks
    tags: TTags
    lists: TLists,
    custom: TCustomLists,
    defaultLists: {
      inbox: {
        id: 'inbox',
        name: 'Inbox',
        type: 'defaultLists',
        tasks: []
      },
      nextSevenDays: {
        id: 'sevenDays',
        name: 'Next 7 Days',
        type: 'defaultLists',
        tasks: []
      }
    }
  },

  ui: {
    selectedList: object
    selectedTab: ETabs
    selectedTask: TTaskID | null
  },
}
