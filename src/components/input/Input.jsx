import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
};

const defaultProps = {
  type: 'text',
  value: '',
};

const Input = ({ type, value }) => <input type={type} value={value} />;

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
