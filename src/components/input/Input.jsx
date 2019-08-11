import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn-fast';
import classnames from 'classnames';

import './styles.less';

const b = bemCn('tra-input');

const propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  prefix: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
    PropTypes.number,
  ]),
  postfix: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
};

const defaultProps = {
  className: '',
  type: 'text',
  value: '',
  prefix: null,
  postfix: null,
  onChange: null,
};

const Input = ({ className, type, value, prefix, postfix, onChange }) => {
  const handleChange = useCallback(
    e => {
      if (onChange) {
        onChange(e.target.value);
      }
    },
    [onChange],
  );

  return (
    <div className={b()}>
      {!!prefix && (
        <div className={b('prefix-container')}>
          <div className={b('prefix')}>{prefix}</div>
        </div>
      )}
      <input
        className={classnames(
          b('input', { 'has-prefix': !!prefix, 'has-postfix': !!postfix }),
          className,
        )}
        type={type}
        value={value}
        onChange={handleChange}
      />
      {!!postfix && (
        <div className={b('postfix-container')}>
          <div className={b('postfix')}>{postfix}</div>
        </div>
      )}
    </div>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
