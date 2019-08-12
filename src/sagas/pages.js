import { takeEvery, put } from 'redux-saga/effects';

import { TRA_TEST_PAGE_OPEN } from '../actions';
import { designsPageOpen, designsPageGetProcess } from '../pages/designs/actions';

function* handlePageAction(action) {
  switch (action.component) {
    case 'designs':
      yield put(designsPageOpen());
      break;
    case 'process':
      yield put(designsPageGetProcess());
      break;
    default:
      break;
  }
}

export default function* pageLoadedSaga() {
  yield takeEvery(TRA_TEST_PAGE_OPEN, handlePageAction);
}
