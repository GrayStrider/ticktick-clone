import { ETabs, TCustomLists, TLists, TTags, TTaskID, TTasks } from 'app/types/types';


export interface GlobalState {
  data: {
    tasks: TTasks
    [ETabs.tags]: TTags
    [ETabs.lists]: TLists,
    [ETabs.custom]: TCustomLists,
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
    selectedList: {
      id: string
      name: string
      type: ETabs
    }
    selectedTab: ETabs
    selectedTask: TTaskID | null
    menuOpen: boolean
  },
}
