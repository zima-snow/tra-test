import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn-fast';
import { DateTime } from 'luxon';

import {
  toCapitalize,
  convertUpperCaseSnakeCaseToCapitalizeText,
  compareDateTimeWithToday,
  fromNow,
} from '../../../../utils';

import './styles.less';

const b = bemCn('tra-design-process');

const propTypes = {
  process: PropTypes.shape({
    _id: PropTypes.string,
    img: PropTypes.string,
    age: PropTypes.number,
    assemblyStatus: PropTypes.string,
    reviewStatus: PropTypes.string,
    title: PropTypes.string,
    updated: PropTypes.string,
  }).isRequired,
  isLoading: PropTypes.bool,
};

const defaultProps = {
  isLoading: false,
};

const Process = ({
  process: { img, title, assemblyStatus, reviewStatus, updated, age },
  isLoading,
}) => {
  const convertAssemblyStatus = useRef(status =>
    status === 'IN_REVIEW'
      ? convertUpperCaseSnakeCaseToCapitalizeText(status)
      : toCapitalize(
          status
            .toLowerCase()
            .split('_')
            .pop(),
        ),
  );

  const convertTitle = useRef(t => {
    if (t.length === 0) return t;
    const parts = t.split(/: | v/);
    const capitalized = toCapitalize(parts[1].toLowerCase());
    return `${parts[0]}: ${capitalized} v${parts[2]}`;
  });

  const [convertedAssemblyStatus, setConvertedAssembleStatus] = useState(
    convertAssemblyStatus.current(assemblyStatus),
  );

  const [convertedReviewStatus, setConvertedReviewStatus] = useState(
    convertUpperCaseSnakeCaseToCapitalizeText(reviewStatus),
  );

  const [updatedDateTime, setUpdatedDateTime] = useState(
    DateTime.fromFormat(updated, 'yyyy-MM-ddThh:mm:ss ZZ'),
  );

  const [convertedTitle, setConvertedTitle] = useState(convertTitle.current(title));

  useEffect(() => {
    setConvertedAssembleStatus(convertAssemblyStatus.current(assemblyStatus));
    setConvertedReviewStatus(convertUpperCaseSnakeCaseToCapitalizeText(reviewStatus));
    setUpdatedDateTime(DateTime.fromFormat(updated, 'yyyy-MM-ddThh:mm:ss ZZ'));
    setConvertedTitle(convertTitle.current(title));
  }, [assemblyStatus, reviewStatus, title, updated]);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <div className={b()}>
      <div className={b('content')}>
        <div className={b('img-container')}>
          <div className={b('status-container')}>
            <div
              className={b('status', {
                color: convertedAssemblyStatus === 'In Review' ? 'yellow' : 'white',
              })}
            >
              {convertedAssemblyStatus}
            </div>
          </div>
          <img src={img} alt={convertedTitle} className="m-l-25" />
        </div>
        <div className={b('description')}>
          <div className={b('description-container')}>
            <div className={b('title')}>{convertedTitle}</div>
          </div>
          <div className={b('description-container')}>
            <div className={b('description-name')}>Review</div>
            <div className={b('description-line')} />
            <div
              className={b('description-value', {
                color:
                  convertedReviewStatus === 'Simulation Negative'
                    ? 'red'
                    : convertedReviewStatus === 'Simulation Positive'
                    ? 'green'
                    : 'black',
              })}
            >
              {convertedReviewStatus}
            </div>
          </div>
          <div className={b('description-container')}>
            <div className={b('description-name')}>Last Updates</div>
            <div className={b('description-line')} />
            <div className={b('description-value')}>
              {compareDateTimeWithToday(updatedDateTime)
                ? fromNow(updatedDateTime)
                : updatedDateTime.toFormat('dd/MM/yyyy, hh:MM')}
            </div>
          </div>
          <div className={b('description-container')}>
            <div className={b('description-name')}>Age</div>
            <div className={b('description-line')} />
            <div className={b('description-value')}>{age}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Process.propTypes = propTypes;
Process.defaultProps = defaultProps;

export default Process;
