import * as React from 'react';
import { Route, Switch } from 'react-router';
import { App as TodoApp } from 'app/containers/App';
import TickTick from 'app/pages/Ticktick/App/index.tsx'
import { hot } from 'react-hot-loader';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/ticktick" component={TickTick} />
    <Route path="/" component={TodoApp} />
  </Switch>
));
