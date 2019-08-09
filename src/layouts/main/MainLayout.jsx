import React from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn-fast';

import AppLayout from '../app';
import Header from '../header';
import { Logo } from '../../components';

import './styles.less';

const b = bemCn('tra-main');

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

const defaultProps = {
  children: null,
};

const MainLayout = ({ children }) => {
  const renderHeader = () => {
    return (
      <Header className={b('header')}>
        <div className={b('header-title-container')}>
          <div className="fb-row fb-row_h_l">
            <Logo />
            <div className={b('header-title')}>Design2Robofacturing</div>
          </div>
        </div>
      </Header>
    );
  };

  const renderContent = () => {
    return <div className={b('content')}>{children}</div>;
  };

  return (
    <AppLayout>
      {renderHeader()}
      {renderContent()}
    </AppLayout>
  );
};

MainLayout.propTypes = propTypes;
MainLayout.defaultProps = defaultProps;

export default MainLayout;
