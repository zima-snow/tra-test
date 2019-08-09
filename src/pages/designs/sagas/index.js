import { takeLatest } from 'redux-saga/effects';

import { DESIGNS_PAGE_OPEN, DESIGNS_PAGE_FILTERS_RECEIVE } from '../actions';

import { handleDesigns } from './designs';

export function* designsSaga() {
  yield takeLatest([DESIGNS_PAGE_OPEN, DESIGNS_PAGE_FILTERS_RECEIVE], handleDesigns);
}

export function* designSaga() {
  yield takeLatest([DESIGNS_PAGE_FILTERS_RECEIVE], handleDesigns);
}
