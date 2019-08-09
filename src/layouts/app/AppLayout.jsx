import React from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn-fast';

import '../less/app.less';

const b = bemCn('tra-app');

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

const defaultProps = {
  children: null,
};

const AppLayout = ({ children }) => <div className={b()}>{children}</div>;

AppLayout.propTypes = propTypes;
AppLayout.defaultProps = defaultProps;

export default AppLayout;
