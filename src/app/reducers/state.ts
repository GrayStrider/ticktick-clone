import { TodoModel } from 'app/models';

export interface RootState {
  router?: any;
  ticktick?: any
}

export namespace RootState {
  export type TodoState = TodoModel[];
}
