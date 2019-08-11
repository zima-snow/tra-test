import { put, select } from 'redux-saga/effects';
import axios from 'axios';

import { entitiesSelector } from '../../../selectors';
import { traTestRegistryUpdate } from '../../../actions';

import {
  designsPageDataReceive,
  designsPageBatchDataReceive,
  designsPageResetData,
  designsPageUpdateList,
  designsPageRemoveListItem,
} from '../actions';

import { getObjectFromArrayByProp } from '../../../utils';

export function* getDesigns() {
  try {
    yield put(traTestRegistryUpdate('designs-list-loading', true));

    const { page, limit, updated } = yield select(state =>
      entitiesSelector('designs')(state, 'filters'),
    );
    const response = yield axios.get(
      `http://127.0.0.1:3000/api/designs?_page=${page}&_limit=${limit}&_sort=updated&_order=${updated}`,
    );

    yield put(designsPageDataReceive(response.data));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(traTestRegistryUpdate('designs-list-loading', false));
  }
}

export function* handleDesigns() {
  yield getDesigns();
}

export function* handleDesignsByFilter(action) {
  try {
    yield put(traTestRegistryUpdate('designs-list-loading', true));

    const {
      payload: { title, assemble, review, updated, page, limit },
    } = action;

    const filters = yield select(state => entitiesSelector('designs')(state, 'filters'));

    if (!page) {
      yield put(designsPageResetData());
    }

    const filter = {
      title: title !== undefined ? title : filters.title,
      assemble: assemble !== undefined ? assemble.key : filters.assemble,
      review: review !== undefined ? review.key : filters.review,
      updated: updated && updated !== filters.updated ? updated : filters.updated,
      page: page && page !== filters.page ? page : filters.page,
      limit: limit && limit !== filters.limit ? limit : filters.limit,
    };

    let params = `_page=${filter.page}&_limit=${filter.limit}
      &_sort=updated&_order=${filter.updated}&`;

    if (filter.title.length !== 0) params = `${params}title=${filter.title}&`;
    if (filter.assemble !== 'any') params = `${params}assemblyStatus=${filter.assemble}&`;
    if (filter.review !== 'any') params = `${params}reviewStatus=${filter.review}&`;

    const response = yield axios.get(`http://127.0.0.1:3000/api/designs?${params}`);

    yield put(designsPageBatchDataReceive(response.data, filter));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(traTestRegistryUpdate('designs-list-loading', false));
  }
}

export function* handleDesignTitleUpdate(action) {
  try {
    yield put(traTestRegistryUpdate('design-title-updating', true));

    const {
      payload: { _id, title },
    } = action;

    const list = yield select(state => entitiesSelector('designs')(state, 'list'));
    const current = getObjectFromArrayByProp(list, { _id });
    const response = yield axios.put(
      `http://127.0.0.1:3000/api/designs/${_id}`,
      { ...current, title },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    yield put(designsPageUpdateList(_id, response.data));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(traTestRegistryUpdate('design-title-updating', false));
  }
}

export function* handleDesignDelete(action) {
  try {
    yield put(traTestRegistryUpdate('design-deleting', true));

    const {
      payload: { _id },
    } = action;
    yield axios.delete(`http://127.0.0.1:3000/api/designs/${_id}`);

    yield put(designsPageRemoveListItem(_id));
  } catch (error) {
    console.error(error);
  } finally {
    yield put(traTestRegistryUpdate('design-deleting', false));
  }
}
