import { TLists, TTags, TTasks } from 'app/pages/Ticktick/types/types';

export interface GlobalState {
  data: {
    tasks: TTasks
    tags: TTags
    lists: TLists
  },
}
