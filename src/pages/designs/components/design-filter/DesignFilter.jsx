import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn-fast';

import { assemblies, reviews } from './consts';
import { Button } from '../../../../components';

import './styles.less';

const b = bemCn('tra-design-filter');

const propTypes = {
  filters: PropTypes.shape({
    assemble: PropTypes.string,
    review: PropTypes.string,
  }),
  onFilter: PropTypes.func,
};

const defaultProps = {
  filters: {},
  onFilter: () => {},
};

const DesignFilter = ({ filters, onFilter }) => {
  const [selectedAssemble, setSelectedAssemble] = useState(filters.assemble);
  const [selectedReview, setSelectedReview] = useState(filters.review);

  const handleFilterAssembleClick = useCallback(
    assemble => {
      if (onFilter) {
        onFilter({ assemble });
      }

      setSelectedAssemble(assemble.key);
    },
    [onFilter],
  );

  const handleFilterReviewClick = useCallback(
    review => {
      if (onFilter) {
        onFilter({ review });
      }

      setSelectedReview(review.key);
    },
    [onFilter],
  );

  return (
    <div className={b()}>
      <div className={b('title')}>Filter</div>
      <div className={b('subtitle')}>Assembly</div>
      <div className={b('list-container')}>
        {assemblies.map(assemble => (
          <div
            key={assemble.key}
            className={b('button-container', { selected: selectedAssemble === assemble.key })}
          >
            <Button
              className={b('button')}
              onClick={() => {
                handleFilterAssembleClick(assemble);
              }}
            >
              {assemble.name}
            </Button>
          </div>
        ))}
      </div>
      <div className={b('subtitle')}>Review</div>
      <div className={b('list-container')}>
        {reviews.map(review => (
          <div
            key={review.key}
            className={b('button-container', { selected: selectedReview === review.key })}
          >
            <Button
              className={b('button')}
              onClick={() => {
                handleFilterReviewClick(review);
              }}
            >
              {review.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

DesignFilter.propTypes = propTypes;
DesignFilter.defaultProps = defaultProps;

export default DesignFilter;
