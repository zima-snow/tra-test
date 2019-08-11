import React, { useState, useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import bemCn from 'bem-cn-fast';

import { DesignListItem, DesignFilter } from './components';
import { Button, IconButton, Input, SearchIcon, CrossIcon } from '../../components';
import { useDebounce, useOnScreen } from '../../hooks';

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
  filters: PropTypes.shape({
    title: PropTypes.string,
    assemble: PropTypes.string,
    review: PropTypes.string,
    updated: PropTypes.string,
    page: PropTypes.number,
    limit: PropTypes.number,
  }),
  isLoading: PropTypes.bool,
  onFilter: PropTypes.func,
  onTitleUpdate: PropTypes.func,
  onDesignDelete: PropTypes.func,
};

const defaultProps = {
  designsList: [],
  filters: {},
  isLoading: false,
  onFilter: () => {},
  onTitleUpdate: () => {},
  onDesignDelete: () => {},
};

const DesignsPage = ({
  designsList,
  filters,
  isLoading,
  onFilter,
  onTitleUpdate,
  onDesignDelete,
}) => {
  const endListRef = useRef();
  const endListOnScreen = useOnScreen(endListRef, '30px');

  const [searchValue, setSearchValue] = useState(filters.title);
  const debouncedSearchValue = useDebounce(searchValue, 1000);
  const [currentOrder, setCurrentOrder] = useState(filters.updated);

  useEffect(() => {
    if (onFilter) {
      onFilter({ title: debouncedSearchValue });
    }
  }, [debouncedSearchValue, onFilter]);

  useEffect(() => {
    if (onFilter && endListOnScreen && !isLoading) {
      onFilter({ page: filters.page + 1 });
    }
  }, [endListOnScreen, filters.page, isLoading, onFilter]);

  const handleOrderClick = useCallback(
    order => {
      if (onFilter) {
        onFilter({ updated: order });
      }

      setCurrentOrder(order);
    },
    [onFilter],
  );

  const handleSearchInputChange = useCallback(value => {
    setSearchValue(value);
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
            <div className={b('sort-container')}>
              <div className={b('sort-buttons')}>
                <Button
                  className={b('sort-button', { on: currentOrder === 'desc' })}
                  onClick={() => {
                    handleOrderClick('desc');
                  }}
                >
                  Latest First
                </Button>
                <Button
                  className={b('sort-button', { on: currentOrder === 'asc' })}
                  onClick={() => {
                    handleOrderClick('asc');
                  }}
                >
                  Old First
                </Button>
              </div>
            </div>
            <Input
              value={searchValue}
              prefix={<SearchIcon />}
              postfix={
                <IconButton
                  className={b('clear-icon')}
                  onClick={() => {
                    handleSearchInputChange('');
                  }}
                >
                  {searchValue.length !== 0 ? <CrossIcon /> : ''}
                </IconButton>
              }
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
        {designsList.map(design => (
          <DesignListItem
            key={design._id}
            onTitleUpdate={onTitleUpdate}
            onDesignDelete={onDesignDelete}
            {...design}
          />
        ))}
        <div ref={endListRef} className="m-v-20">
          {endListOnScreen && 'Loading...'}
        </div>
      </div>
    </div>
  );
};

DesignsPage.propTypes = propTypes;
DesignsPage.defaultProps = defaultProps;

export default DesignsPage;
