import { put } from 'redux-saga/effects';
import axios from 'axios';

import { designsPageGetBatchData } from '../actions';

export function* getDesigns() {
  try {
    const response = yield axios.get('http://127.0.0.1:3000/api/designs?_page=1&_limit=20');

    yield put(designsPageGetBatchData(response.data));
  } catch (error) {
    console.error(error);
  }
}

export function* handleDesigns() {
  yield getDesigns();
}
