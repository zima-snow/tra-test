import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  type: 'text',
  value: '',
  onChange: null,
};

const Input = ({ type, value, onChange }) => {
  const handleChange = useCallback(
    e => {
      if (onChange) {
        onChange(e.target.value);
      }
    },
    [onChange],
  );

  return <input type={type} value={value} onChange={handleChange} />;
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
