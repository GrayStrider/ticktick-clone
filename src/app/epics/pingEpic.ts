import { delay, filter, mapTo } from 'rxjs/operators';
import { Action, getType, isActionOf } from 'typesafe-actions';
import { ping, pong } from 'app/actions/pingPong';
import { Epic } from 'redux-observable';

export const pingEpic: Epic<Action<any>, Action<any>, void, any> = (action$, state$) => action$.pipe(
  filter(isActionOf(ping)),
  delay(1000),
  mapTo({type: getType(pong)})
);
