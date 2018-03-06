// https://github.com/sorrycc/blog/issues/48
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './pages/index';

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage(app)} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
