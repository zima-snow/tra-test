import { DESIGN_PAGE_FILTERS_RECEIVE, DESIGN_PAGE_GET_BATCH_DATA } from './actions';

const defaultState = {
  list: [],
  filters: {},
};

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

export default (state = defaultState, action) => {
  switch (action.type) {
    case DESIGN_PAGE_FILTERS_RECEIVE:
      return filtersReceive(action, state);
    case DESIGN_PAGE_GET_BATCH_DATA:
      return batchDataReceive(action, state);
    default:
      return state;
  }
};
