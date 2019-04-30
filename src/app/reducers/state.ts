import { TodoModel } from 'app/models';

export interface RootState {
  todos: RootState.TodoState;
  router?: any;
  ticktick?: any;
  typedTickTick?: any
}

export namespace RootState {
  export type TodoState = TodoModel[];
}
