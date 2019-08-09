import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import { all } from 'redux-saga/effects';

import createStore from './store';
import rootReducer from './reducers';
import sagas from './sagas';
import Router from './router';

import './less/index.less';

const store = createStore(rootReducer, {
  persistedState: {
    registry: {
      'app-loading': true,
    },
  },
});

function* watchSaga() {
  yield all(sagas.map(saga => saga()));
}

store.runSaga(watchSaga);

/* eslint-disable react/jsx-filename-extension */
const render = () => {
  ReactDOM.render(
    <Provider store={store} context={ReactReduxContext}>
      <Router context={ReactReduxContext} />
    </Provider>,
    document.getElementById('root'),
  );
};
render();

if (module.hot) {
  // Reload components
  module.hot.accept(() => {
    render();
  });
}
