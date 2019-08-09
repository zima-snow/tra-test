import { takeEvery, put } from 'redux-saga/effects';

import { TRA_TEST_INIT, traTestRegistryUpdate } from '../actions';

function* handleInit() {
  yield put(traTestRegistryUpdate('app-loading', false));
}

export default function* appLoadedSaga() {
  yield takeEvery(TRA_TEST_INIT, handleInit);
}
