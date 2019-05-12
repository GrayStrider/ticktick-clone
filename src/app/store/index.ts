import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'app/utils/middleware';
import { RootState, rootReducer } from 'app/reducers';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from 'app/epics/rootEpic';
import { Action } from 'typesafe-actions';

export function configureStore(initialState?: RootState): Store<RootState> {
  const epicMiddleware = createEpicMiddleware<
    Action<any>,
    Action<any>,
    void,
    any>()
  const middlewares = [logger, epicMiddleware];

  let enhancer = applyMiddleware(...middlewares);

  process.env.NODE_ENV !== 'production' ?
    enhancer = composeWithDevTools(enhancer) : enhancer

  const store = createStore(
    rootReducer as any, initialState as any, enhancer) as Store<RootState>;

  // @ts-ignore
  epicMiddleware.run(rootEpic)

  if (module.hot) {
    module.hot.accept('app/reducers', () => {
      const nextReducer = require('app/reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
