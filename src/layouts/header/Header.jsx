import React from 'react';
import bemCn from 'bem-cn-fast';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../less/header.less';

const bemHeader = bemCn('tra-header');

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  fixed: PropTypes.bool,
};

const defaultProps = {
  className: '',
  children: null,
  fixed: false,
};

const Header = ({ className, children, fixed }) => {
  const $className = classNames(bemHeader({ fixed }), className);
  return (
    <div className={$className}>
      <div className={bemHeader('content')}>{children}</div>
    </div>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
