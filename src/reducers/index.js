import pagesReducers from '../pages/reducers';

import registryReducer from './registry';

export default {
  entities: pagesReducers,
  registry: registryReducer,
};
