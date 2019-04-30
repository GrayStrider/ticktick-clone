import produce from 'immer';
import { DEFAULT_ACTION } from './typedActions';
import { GlobalState } from 'app/pages/Ticktick/Models/GlobalState';
import { Chance } from "chance";
import { Ttags, TTasks } from 'app/pages/Ticktick/Models/Task';
const chance = new Chance(Math.random);


const tasks = {} as TTasks
const tags = {} as Ttags

export const initialState: GlobalState = {
  tasks,
  tags
}

/* eslint-disable default-case, no-param-reassign */
const typedReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default typedReducer;
