import {
  DESIGN_PAGE_OPEN,
  DESIGN_PAGE_FILTERS_RECEIVE,
  DESIGN_PAGE_GET_BATCH_DATA,
} from './consts';

export const designPageOpen = () => ({
  type: DESIGN_PAGE_OPEN,
  payload: {},
});

export const designPageFiltersReceive = filters => ({
  type: DESIGN_PAGE_FILTERS_RECEIVE,
  payload: filters,
});

export const designPageGetBatchData = (batchData, filters) => ({
  type: DESIGN_PAGE_GET_BATCH_DATA,
  payload: { batchData, filters },
});
