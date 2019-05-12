import { delay, filter, mapTo, tap } from 'rxjs/operators';
import { action, Action, getType, isActionOf } from 'typesafe-actions';
import { ping, pong } from 'app/actions/pingPong';
import { Epic } from 'redux-observable';

export const pingEpic: Epic<Action<any>, Action<any>, void, any> = (action$, state$) => action$.pipe(
  filter(isActionOf(ping)),
  delay(1000),
  mapTo({type: getType(pong)}),
  tap(action$ => console.log('tapped: ' + action$)),
  delay(1000),
  mapTo({type: 'TEST'})
);
