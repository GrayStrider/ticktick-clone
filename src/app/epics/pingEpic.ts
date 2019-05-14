import { delay, endWith, flatMap, mapTo, repeat, tap } from 'rxjs/operators';
import { concat } from 'rxjs';
import { Action, getType } from 'typesafe-actions';
import { ping, pong } from 'app/actions/pingPong';
import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';

// export const pingEpic: Epic<Action<any>, Action<any>, void, any> = (action$, state$) => action$.pipe(
//   ofType(getType(ping)),
//   flatMap(action => concat(
//     of({type: getType(pong)}),
//     of({type: 'TEST'}).pipe(delay(5000))
//   ))
// );

/**
 * 1) log before wait with tap
 * 2) pipe the pipe for "repeat"
 *
 */

export const pingEpic2: Epic<Action<any>, Action<any>, void, any> = (action$, state$) => action$.pipe(
  ofType(getType(ping)),
  flatMap(action => concat(
    of({ type: 'TEST2' })
      .pipe(
        tap(() => console.log('before emition')),
        delay(2000),
        repeat(3),
        tap(() => console.log('Emit: ')),
      )
    )
  ));

