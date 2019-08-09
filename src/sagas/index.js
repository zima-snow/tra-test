import watchEntities from '../pages/sagas';
import appLoadedSaga from './init';
import pageLoadedSaga from './pages';

export default [appLoadedSaga, pageLoadedSaga, ...watchEntities];
