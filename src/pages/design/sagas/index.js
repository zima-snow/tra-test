import { takeLatest } from 'redux-saga/effects';

import { DESIGN_PAGE_OPEN, DESIGN_PAGE_FILTERS_RECEIVE } from '../actions';

import { handleDesigns } from './designs';

export function* designsSaga() {
  yield takeLatest([DESIGN_PAGE_OPEN, DESIGN_PAGE_FILTERS_RECEIVE], handleDesigns);
}

export function* designSaga() {
  yield takeLatest([DESIGN_PAGE_FILTERS_RECEIVE], handleDesigns);
}
