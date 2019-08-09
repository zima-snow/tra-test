import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

export default (
  reducers = {},
  { persistedState = {}, preMiddleware = [], postMiddleware = [] },
) => {
  const sagaMiddleware = createSagaMiddleware();
  let middlewares = [...preMiddleware, sagaMiddleware, ...postMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    middlewares = [...middlewares, createLogger()];
  }

  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composedMiddleware = composeEnhancers(applyMiddleware(...middlewares));

  const store = createStore(combineReducers({ ...reducers }), persistedState, composedMiddleware);

  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = reducers;
  store.injectedSagas = {};

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(combineReducers({ ...store.injectedReducers }));
    });
  }

  return store;
};
