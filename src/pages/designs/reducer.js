import remove from 'lodash.remove';

import {
  DESIGNS_PAGE_DATA_RECEIVE,
  DESIGNS_PAGE_FILTERS_RECEIVE,
  DESIGNS_PAGE_BATCH_DATA_RECEIVE,
  DESIGNS_PAGE_RESET_DATA,
  DESIGNS_PAGE_UPDATE_LIST,
  DESIGNS_PAGE_REMOVE_LIST_ITEM,
} from './actions';

import { upsertObjectToArray } from '../../utils';

const defaultState = {
  list: [],
  filters: {
    title: '',
    assemble: 'any',
    review: 'any',
    updated: 'desc',
    page: 1,
    limit: 20,
  },
};

function dataReceive(action, state) {
  const { data } = action.payload;

  return {
    ...state,
    list: data,
  };
}

function filtersReceive(action, state) {
  const filters = action.payload;

  return {
    ...state,
    filters: {
      ...state.filters,
      ...filters,
    },
  };
}

function batchDataReceive(action, state) {
  const { batchData, filters } = action.payload;

  return {
    ...state,
    list: [...state.list, ...batchData],
    filters: {
      ...state.filters,
      ...filters,
    },
  };
}

function updateListItem(action, state) {
  const { _id, data } = action.payload;
  const newList = [...state.list];
  upsertObjectToArray(newList, { _id }, data);

  return {
    ...state,
    list: newList,
  };
}

function removeListItem(action, state) {
  const { _id } = action.payload;
  const newList = [...state.list];
  remove(newList, item => item._id === _id);

  return {
    ...state,
    list: newList,
  };
}

function resetData(action, state) {
  return {
    ...state,
    list: [],
  };
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case DESIGNS_PAGE_DATA_RECEIVE:
      return dataReceive(action, state);
    case DESIGNS_PAGE_FILTERS_RECEIVE:
      return filtersReceive(action, state);
    case DESIGNS_PAGE_BATCH_DATA_RECEIVE:
      return batchDataReceive(action, state);
    case DESIGNS_PAGE_UPDATE_LIST:
      return updateListItem(action, state);
    case DESIGNS_PAGE_REMOVE_LIST_ITEM:
      return removeListItem(action, state);
    case DESIGNS_PAGE_RESET_DATA:
      return resetData(action, state);
    default:
      return state;
  }
};
