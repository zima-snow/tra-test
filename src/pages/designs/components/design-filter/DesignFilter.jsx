import React from 'react';
import bemCn from 'bem-cn-fast';

import './styles.less';

const b = bemCn('tra-design-filter');

const DesignFilter = () => {
  return (
    <div className={b()}>
      <div className={b('title')}>Filter</div>
      <div className={b('subtitle')}>Assembly</div>
      <div className={b('list-container')}>
        <ul>
          <li>Any</li>
          <li>In Review</li>
          <li>Review Finished</li>
        </ul>
      </div>
      <div className={b('subtitle')}>Review</div>
      <div className={b('list-container')}>
        <ul>
          <li>Any</li>
          <li>Draft</li>
          <li>Solved</li>
          <li>Simulation Requested</li>
          <li>Simulation Positive</li>
          <li>Simulation Negative</li>
        </ul>
      </div>
    </div>
  );
};

export default DesignFilter;
