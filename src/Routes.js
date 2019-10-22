import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import ComponentLoading from './Tools/ComponentLoading';
import UserStore from './Store/UserStore';

const Test = Loadable({
  loader: () => import('./Test' /* webpackChunkName: "Test" */),
  loading: () => <ComponentLoading />
});

const getConfigRedirectURI = () => {
  return <Redirect to="/configure/test-grid" />;
  // if it don't have any permissions it will redirect to next
};

const InitRouter = () =>
  UserStore.getUserDetails() ? getConfigRedirectURI() : <Redirect to="/" />;

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => <InitRouter />} />
    <Route
      exact
      path="/"
      render={() => <Redirect to="/configure/test-grid" />}
    />
    {/* Configure Control */}
    <Route exact path="/configure" render={() => getConfigRedirectURI()} />
    <Route exact path="/configure/test-grid" component={Test} />
  </Switch>
);

// export default withRouter();
export default Routes;
