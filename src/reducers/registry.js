import { TRA_TEST_REGISTRY_UPDATE } from '../actions';

const defaultState = {
  registry: {},
};

function registryUpdate(action, state) {
  const { key, value } = action.payload;

  return {
    ...state,
    [key]: value,
  };
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case TRA_TEST_REGISTRY_UPDATE:
      return registryUpdate(action, state);
    default:
      return state;
  }
};
