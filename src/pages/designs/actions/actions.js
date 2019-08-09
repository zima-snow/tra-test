import {
  DESIGNS_PAGE_OPEN,
  DESIGNS_PAGE_FILTERS_RECEIVE,
  DESIGNS_PAGE_GET_BATCH_DATA,
} from './consts';

export const designsPageOpen = () => ({
  type: DESIGNS_PAGE_OPEN,
  payload: {},
});

export const designsPageFiltersReceive = filters => ({
  type: DESIGNS_PAGE_FILTERS_RECEIVE,
  payload: filters,
});

export const designsPageGetBatchData = (batchData, filters) => ({
  type: DESIGNS_PAGE_GET_BATCH_DATA,
  payload: { batchData, filters },
});
