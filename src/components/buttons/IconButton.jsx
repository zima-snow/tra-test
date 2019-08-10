import React from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn-fast';
import classnames from 'classnames';

import './styles.less';

const b = bemCn('tra-icon-button');

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
};

const defaultProps = {
  className: '',
  children: null,
  onClick: () => {},
};

const IconButton = ({ className, children, onClick }) => (
  <button type="button" onClick={onClick} className={classnames(b(), className)}>
    {children}
  </button>
);

IconButton.propTypes = propTypes;
IconButton.defaultProps = defaultProps;

export default IconButton;
