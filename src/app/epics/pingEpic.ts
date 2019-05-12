import {delay, filter, flatMap, mapTo, tap } from 'rxjs/operators';
import {concat} from 'rxjs';
import { action, Action, getType, isActionOf } from 'typesafe-actions';
import { ping, pong } from 'app/actions/pingPong';
import { Epic, ofType } from 'redux-observable';
import { Observable, of } from 'rxjs';

export const pingEpic: Epic<Action<any>, Action<any>, void, any> = (action$, state$) => action$.pipe(
  ofType(getType(ping)),
  flatMap(action => concat(
    of({type: getType(pong)}),
    // delay(1000),
    of({type: 'TEST'})
  ))
);
