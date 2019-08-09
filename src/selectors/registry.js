import get from 'lodash.get';

const registrySelector = (state, key) => get(state, ['registry', key], null);

export default registrySelector;
