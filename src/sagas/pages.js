import { takeEvery, put } from 'redux-saga/effects';

import { TRA_TEST_PAGE_OPEN } from '../actions';
import { designPageOpen } from '../pages/design/actions';

function* handlePageAction(action) {
  switch (action.component) {
    case 'design':
      yield put(designPageOpen());
      break;
    default:
      break;
  }
}

export default function* pageLoadedSaga() {
  yield takeEvery(TRA_TEST_PAGE_OPEN, handlePageAction);
}
