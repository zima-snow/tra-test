import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn-fast';

import { DesignListItem, DesignFilter } from './components';
import { Input } from '../../components';

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
  const onSearchInputChange = useCallback(() => {
    // pass
  }, []);

  return (
    <div className={b()}>
      <div className={b('filter')}>
        <DesignFilter />
      </div>
      <div className={b('list')}>
        <div className={b('toolbox-container')}>
          <div className={b('title')}>Assembly Processes</div>
          <div className={b('toolbox')}>
            <div>Show</div>
            <div>
              <Input onChange={onSearchInputChange} />
            </div>
          </div>
        </div>
        {designsList.map(design => (
          <DesignListItem key={design._id} {...design} />
        ))}
      </div>
    </div>
  );
};

DesignsPage.propTypes = propTypes;
DesignsPage.defaultProps = defaultProps;

export default DesignsPage;
