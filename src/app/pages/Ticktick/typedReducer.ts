import produce from 'immer';
import { DEFAULT_ACTION } from './typedActions';
import { GlobalState } from 'app/pages/Ticktick/types/GlobalState';
import { Chance } from "chance";
import { TLists, TTags, TTasks } from 'app/pages/Ticktick/types/types';
import typedGenerateMockData from 'app/pages/Ticktick/typedGenerateMockData';
const chance = new Chance(Math.random);


const tasks = {} as TTasks
const tags = {} as TTags
const lists = {} as TLists

typedGenerateMockData(tasks,tags,lists)

export const initialState: GlobalState = {
  data: {
    tasks,
    tags,
    lists
  }
}

const typedReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default typedReducer;
