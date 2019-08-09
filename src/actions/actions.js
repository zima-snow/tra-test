import { TRA_TEST_INIT, TRA_TEST_PAGE_OPEN, TRA_TEST_REGISTRY_UPDATE } from './consts';

export const traTestInit = () => ({
  type: TRA_TEST_INIT,
});

export const traTestShowPage = (component, pageType) => params => ({
  type: TRA_TEST_PAGE_OPEN,
  component,
  pageType,
  payload: params,
});

export const traTestRegistryUpdate = (key, value) => ({
  type: TRA_TEST_REGISTRY_UPDATE,
  payload: { key, value },
});
