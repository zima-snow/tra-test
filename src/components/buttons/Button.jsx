import React from 'react';
import PropTypes from 'prop-types';

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

const Button = ({ className, children, onClick }) => (
  <button type="button" onClick={onClick} className={className}>
    {children}
  </button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
