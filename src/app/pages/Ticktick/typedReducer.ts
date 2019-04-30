import produce from 'immer';
import { DEFAULT_ACTION } from './typedActions';
import { GlobalState } from 'app/pages/Ticktick/types/GlobalState';
import { Chance } from 'chance';
import { ETabs, TCustomLists, TLists, TTags, TTasks } from 'app/pages/Ticktick/types/types';
import typedGenerateMockData from 'app/pages/Ticktick/typedGenerateMockData';
import { SELECT_TAB } from 'app/pages/Ticktick/components/Lists/actions';

const chance = new Chance(Math.random);


const tasks = {} as TTasks
const tags = {} as TTags
const lists = {} as TLists
const customLists = {} as TCustomLists

typedGenerateMockData(tasks,tags,lists)

export const initialState: GlobalState = {
  data: {
    tasks,
    tags,
    lists,
    customLists
  },
  ui: {
    selectedList: 'test',
    selectedTab: ETabs.lists
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

const typedReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SELECT_TAB:
        draft.ui.selectedTab = action.payload;
        break;
    }
  });

export default typedReducer;
