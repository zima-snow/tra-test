import {
  DESIGNS_PAGE_OPEN,
  DESIGNS_PAGE_FILTERS_RECEIVE,
  DESIGNS_PAGE_GET_BATCH_DATA,
  DESIGNS_PAGE_DATA_RECEIVE,
  DESIGNS_PAGE_BATCH_DATA_RECEIVE,
  DESIGNS_PAGE_RESET_DATA,
  DESIGNS_PAGE_UPDATE_TITLE,
  DESIGNS_PAGE_DELETE_DESIGN,
  DESIGNS_PAGE_UPDATE_LIST,
  DESIGNS_PAGE_REMOVE_LIST_ITEM,
  DESIGNS_PAGE_GET_PROCESS,
  DESIGNS_PAGE_PROCESS_RECEIVE,
} from './consts';

export const designsPageOpen = () => ({
  type: DESIGNS_PAGE_OPEN,
  payload: {},
});

export const designsPageFiltersReceive = filters => ({
  type: DESIGNS_PAGE_FILTERS_RECEIVE,
  payload: filters,
});

export const designsPageGetBatchData = filter => ({
  type: DESIGNS_PAGE_GET_BATCH_DATA,
  payload: filter,
});

export const designsPageDataReceive = data => ({
  type: DESIGNS_PAGE_DATA_RECEIVE,
  payload: { data },
});

export const designsPageBatchDataReceive = (batchData, filters, totalCount) => ({
  type: DESIGNS_PAGE_BATCH_DATA_RECEIVE,
  payload: { batchData, filters, totalCount },
});

export const designsPageUpdateTitle = (_id, title) => ({
  type: DESIGNS_PAGE_UPDATE_TITLE,
  payload: { _id, title },
});

export const designsPageDeleteDesign = _id => ({
  type: DESIGNS_PAGE_DELETE_DESIGN,
  payload: { _id },
});

export const designsPageResetData = () => ({
  type: DESIGNS_PAGE_RESET_DATA,
});

export const designsPageUpdateList = (_id, data) => ({
  type: DESIGNS_PAGE_UPDATE_LIST,
  payload: { _id, data },
});

export const designsPageRemoveListItem = _id => ({
  type: DESIGNS_PAGE_REMOVE_LIST_ITEM,
  payload: { _id },
});

export const designsPageGetProcess = () => ({
  type: DESIGNS_PAGE_GET_PROCESS,
});

export const designsPageProcessReceive = process => ({
  type: DESIGNS_PAGE_PROCESS_RECEIVE,
  payload: { process },
});
