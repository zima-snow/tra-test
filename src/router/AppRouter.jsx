import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { registrySelector } from '../selectors';

import { traTestInit } from '../actions';
import AppRoute from './AppRoute';
import pages from './config';

const history = createBrowserHistory();

const { push, replace, block } = history;

const propTypes = {
  isLoading: PropTypes.bool,
  onInit: PropTypes.func,
};

const defaultProps = {
  isLoading: true,
  onInit: () => {},
};

const AppRouter = ({ onInit, isLoading }) => {
  if (onInit) {
    onInit();
  }

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/designs" />} />
        {Object.keys(pages).map(pageKey => (
          <AppRoute {...pages[pageKey]} key={pageKey} />
        ))}
      </Switch>
    </Router>
  );
};

AppRouter.propTypes = propTypes;
AppRouter.defaultProps = defaultProps;

const mapStateToProps = state => ({
  isLoading: registrySelector(state, 'app-loading'),
});

const mapDispatchToProps = dispatch => ({
  onInit: () => {
    dispatch(traTestInit());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppRouter);

export { push, replace, block };
