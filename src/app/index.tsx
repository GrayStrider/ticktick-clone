import * as React from 'react';
import { Route, Switch } from 'react-router';
import TickTick from 'app/pages/Ticktick/App/index.tsx'
import { hot } from 'react-hot-loader';
import GlobalStyle from 'app/global-styles';
import styled from 'styled-components';

const AppWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const App = hot(module)(() => (
  <Switch>
    <AppWrapper>
      <Route path='/' component={TickTick}/>
      <GlobalStyle/>
    </AppWrapper>
  </Switch>
));
