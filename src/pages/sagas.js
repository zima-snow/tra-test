import {
  designsFilterSaga,
  designsTitleUpdateSaga,
  designsDeleteDesignSaga,
} from './designs/sagas';

const sagas = [designsFilterSaga, designsTitleUpdateSaga, designsDeleteDesignSaga];

export default sagas;
