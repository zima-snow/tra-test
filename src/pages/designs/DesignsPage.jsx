import React from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn-fast';

import { DesignListItem } from './components';

import './styles.less';

const b = bemCn('tra-designs-page');

const propTypes = {
  designsList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      img: PropTypes.string,
      age: PropTypes.number,
      assemblyStatus: PropTypes.string,
      reviewStatus: PropTypes.string,
      title: PropTypes.string,
      updated: PropTypes.string,
    }),
  ),
};

const defaultProps = {
  designsList: [],
};

const DesignsPage = ({ designsList }) => {
  return (
    <div>
      <h4 className={b('title')}>Assembly Processes</h4>
      {designsList.map(design => (
        <DesignListItem key={design._id} {...design} />
      ))}
    </div>
  );
};

DesignsPage.propTypes = propTypes;
DesignsPage.defaultProps = defaultProps;

export default DesignsPage;
