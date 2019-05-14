import { delay, exhaustMap, flatMap, ignoreElements, mapTo, takeLast, takeUntil, tap } from 'rxjs/operators';
import { combineLatest, concat, merge, timer } from 'rxjs';
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
 * - tap before and after delay
 * - order of delay/repeat matters
 * - consecutive actions in concat
 * - concat: consecutive, merge: same time
 * - ignoreElements for pure console.log, loops and hangs otherwise
 */

export const pingEpic2: Epic<Action<any>, Action<any>, void, any> = (action$, state$) => action$.pipe(
  ofType(getType(ping)),
  exhaustMap(action => concat(

    of({ type: 'TEST2' }).pipe(
        tap(() => console.log('before emition')),
        delay(2000),
        // repeat(3),
        tap(() => console.log('Emit: ')),
      ),
    of({type: getType(pong)}).pipe(
        delay(2000)
      )
    )
  )
);

export const pingEpic: Epic<Action<any>, Action<any>, void, any> = (action$, state$) => action$.pipe(
  ofType(getType(pong)),
  tap(() => console.log('test')),
  ignoreElements()
);

////////////////////////////////////////////////////

