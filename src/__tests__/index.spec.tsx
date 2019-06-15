import { render } from '@testing-library/react';
import * as React from 'react';
import { sum } from '../sum';
import { App } from 'app/index';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { configureStore } from 'app/store';
import { Router } from 'react-router';

it('should render', function() {
  const history = createBrowserHistory();
  const store = configureStore();
  const app = render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
  expect(app).toBeTruthy();
  // expect(sum(1, 3)).toBe(4)
});
