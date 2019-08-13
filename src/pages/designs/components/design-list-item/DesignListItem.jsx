import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn-fast';
import { DateTime } from 'luxon';

import {
  Button,
  IconButton,
  Input,
  ArrowLeftIcon,
  EditIcon,
  RemoveIcon,
  CheckIcon,
} from '../../../../components';
import {
  toCapitalize,
  convertUpperCaseSnakeCaseToCapitalizeText,
  compareDateTimeWithToday,
  fromNow,
} from '../../../../utils';
import { useHover } from '../../../../hooks';
import { push } from '../../../../router';

import './styles.less';

const b = bemCn('tra-design-list-item');

const propTypes = {
  _id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  assemblyStatus: PropTypes.string.isRequired,
  reviewStatus: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
  onTitleUpdate: PropTypes.func,
  onDesignDelete: PropTypes.func,
};

const defaultProps = {
  onTitleUpdate: () => {},
  onDesignDelete: () => {},
};

const DesignListItem = ({
  _id,
  img,
  assemblyStatus,
  reviewStatus,
  title,
  updated,
  onTitleUpdate,
  onDesignDelete,
}) => {
  const [hoverRef, isHovered] = useHover();

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
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setConvertedAssembleStatus(convertAssemblyStatus.current(assemblyStatus));
    setConvertedReviewStatus(convertUpperCaseSnakeCaseToCapitalizeText(reviewStatus));
    setUpdatedDateTime(DateTime.fromFormat(updated, 'yyyy-MM-ddThh:mm:ss ZZ'));
    setConvertedTitle(convertTitle.current(title));
  }, [assemblyStatus, reviewStatus, title, updated]);

  const handleIsEditChange = useCallback(() => {
    if (isEdit && onTitleUpdate) {
      onTitleUpdate(_id, convertedTitle);
    }
    setIsEdit(!isEdit);
  }, [_id, isEdit, onTitleUpdate, convertedTitle]);

  const handleTitleChange = useCallback(value => {
    setConvertedTitle(value);
  }, []);

  const handleDesignDelete = useCallback(() => {
    if (onDesignDelete) {
      onDesignDelete(_id);
    }
  }, [_id, onDesignDelete]);

  return (
    <div ref={hoverRef} className={b()}>
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
      <div className={b('content')}>
        <div className={b('title')}>
          {!isEdit ? (
            convertedTitle
          ) : (
            <Input
              className={b('title-input')}
              value={convertedTitle}
              onChange={handleTitleChange}
            />
          )}
        </div>
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
      <div className={b('buttons', { hidden: !isHovered })}>
        <div className={b('buttons-container')}>
          <div className="fb-row fb-row_h_r m-r-25">
            <IconButton onClick={handleIsEditChange}>
              {isEdit ? <CheckIcon /> : <EditIcon />}
            </IconButton>
            <IconButton onClick={handleDesignDelete}>
              <RemoveIcon />
            </IconButton>
          </div>
          <div className="fb-row fb-row_h_r m-t-20 m-r-25">
            <Button
              className={b('button-detail')}
              onClick={() => {
                push(`/process/${_id}`);
              }}
            >
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
