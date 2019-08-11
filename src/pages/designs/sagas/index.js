import { takeLatest } from 'redux-saga/effects';

import {
  DESIGNS_PAGE_OPEN,
  DESIGNS_PAGE_FILTERS_RECEIVE,
  DESIGNS_PAGE_GET_BATCH_DATA,
  DESIGNS_PAGE_UPDATE_TITLE,
  DESIGNS_PAGE_DELETE_DESIGN,
} from '../actions';

import {
  handleDesigns,
  handleDesignsByFilter,
  handleDesignTitleUpdate,
  handleDesignDelete,
} from './designs';

export function* designsSaga() {
  yield takeLatest([DESIGNS_PAGE_OPEN, DESIGNS_PAGE_FILTERS_RECEIVE], handleDesigns);
}

export function* designsFilterSaga() {
  yield takeLatest([DESIGNS_PAGE_GET_BATCH_DATA], handleDesignsByFilter);
}

export function* designsTitleUpdateSaga() {
  yield takeLatest([DESIGNS_PAGE_UPDATE_TITLE], handleDesignTitleUpdate);
}

export function* designsDeleteDesignSaga() {
  yield takeLatest([DESIGNS_PAGE_DELETE_DESIGN], handleDesignDelete);
}
