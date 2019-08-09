import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import AppRouteLayout from './AppRouteLayout';

const propTypes = {
  layout: PropTypes.oneOfType([PropTypes.node, PropTypes.any]).isRequired,
  component: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.any])
    .isRequired,
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  onEnter: PropTypes.func,
};

const defaultProps = {
  exact: true,
  onEnter: () => {},
};

const AppRoute = ({ layout, component: Component, exact, path, onEnter, ...rest }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={({ match }) => (
        <AppRouteLayout layout={layout} onEnter={onEnter} match={match}>
          <Component {...rest} />
        </AppRouteLayout>
      )}
    />
  );
};

AppRoute.propTypes = propTypes;
AppRoute.defaultProps = defaultProps;

const mapDispatchToProps = (dispatch, ownProps) => ({
  onEnter: params => {
    const { onEnterAction } = ownProps;
    if (onEnterAction) {
      dispatch(onEnterAction(params));
    }
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(AppRoute);
