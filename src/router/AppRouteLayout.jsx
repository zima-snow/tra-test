import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  layout: PropTypes.oneOfType([PropTypes.node, PropTypes.any]).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onEnter: PropTypes.func,
};

const defaultProps = {
  onEnter: () => {},
};

const AppRouteLayout = ({ match, layout: Layout, children, onEnter, ...rest }) => {
  const ComponentLayout = Layout || React.Fragment;

  if (onEnter) {
    onEnter(match.params);
  }

  return <ComponentLayout {...rest}>{children}</ComponentLayout>;
};

AppRouteLayout.propTypes = propTypes;
AppRouteLayout.defaultProps = defaultProps;

export default AppRouteLayout;
