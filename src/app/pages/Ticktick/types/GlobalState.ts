import { ETabs, TCustomLists, TLists, TTags, TTasks } from 'app/pages/Ticktick/types/types';

export interface GlobalState {
  data: {
    tasks: TTasks
    tags: TTags
    lists: TLists,
    customLists: TCustomLists
  },

  ui: {
    selectedList: any
    selectedTab: ETabs
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
