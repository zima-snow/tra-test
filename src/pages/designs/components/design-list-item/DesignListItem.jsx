import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn-fast';
import { DateTime } from 'luxon';

import { Button, IconButton, ArrowLeftIcon, EditIcon, RemoveIcon } from '../../../../components';
import {
  toCapitalize,
  convertUpperCaseSnakeCaseToCapitalizeText,
  compareDateTimeWithToday,
  fromNow,
} from '../../../../utils';

import './styles.less';

const b = bemCn('tra-design-list-item');

const propTypes = {
  _id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  assemblyStatus: PropTypes.string.isRequired,
  reviewStatus: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
  onDetailClick: PropTypes.func,
};

const defaultProps = {
  onDetailClick: () => {},
};

const DesignListItem = ({
  _id,
  img,
  assemblyStatus,
  reviewStatus,
  title,
  updated,
  onDetailClick,
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

  const [convertedAssemblyStatus, setConvertedAssembleStatus] = useState(
    convertAssemblyStatus.current(assemblyStatus),
  );

  const [convertedReviewStatus, setConvertedReviewStatus] = useState(
    convertUpperCaseSnakeCaseToCapitalizeText(reviewStatus),
  );

  const [updatedDateTime, setUpdatedDateTime] = useState(
    DateTime.fromFormat(updated, 'yyyy-MM-ddThh:mm:ss ZZ'),
  );

  useEffect(() => {
    setConvertedAssembleStatus(convertAssemblyStatus.current(assemblyStatus));
    setConvertedReviewStatus(convertUpperCaseSnakeCaseToCapitalizeText(reviewStatus));
    setUpdatedDateTime(DateTime.fromFormat(updated, 'yyyy-MM-ddThh:mm:ss ZZ'));
  }, [assemblyStatus, reviewStatus, updated]);

  const handleViewProcessClick = useCallback(() => {
    if (onDetailClick) {
      onDetailClick(_id);
    }
  }, [_id, onDetailClick]);

  return (
    <div className={b()}>
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
        <img src={img} alt={title} className="m-l-25" />
      </div>
      <div className={b('content')}>
        <div className={b('title')}>{title}</div>
        <div className={b('description')}>
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
        <div className={b('description')}>
          <div className={b('description-name')}>Last Updates</div>
          <div className={b('description-line')} />
          <div className={b('description-value')}>
            {compareDateTimeWithToday(updatedDateTime)
              ? fromNow(updatedDateTime)
              : updatedDateTime.toFormat('dd/MM/yyyy, hh:MM')}
          </div>
        </div>
      </div>
      <div className={b('buttons')}>
        <div className={b('buttons-container')}>
          <div className="fb-row fb-row_h_r m-r-25">
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton>
              <RemoveIcon />
            </IconButton>
          </div>
          <div className="fb-row fb-row_h_r m-t-20 m-r-25">
            <Button className={b('button-detail')} onClick={handleViewProcessClick}>
              <div className="fb-row fb-row_h_sb">
                <div className="fb-self fb-self_v_c">View Process</div>
                <ArrowLeftIcon />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

DesignListItem.propTypes = propTypes;
DesignListItem.defaultProps = defaultProps;

export default DesignListItem;
