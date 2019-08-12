import {
  designsFilterSaga,
  designsTitleUpdateSaga,
  designsDeleteDesignSaga,
  designsGetProcessSaga,
} from './designs/sagas';

const sagas = [
  designsFilterSaga,
  designsTitleUpdateSaga,
  designsDeleteDesignSaga,
  designsGetProcessSaga,
];

export default sagas;
