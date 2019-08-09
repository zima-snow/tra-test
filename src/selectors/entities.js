import get from 'lodash.get';

const entitiesSelector = entity => (state, entityId) =>
  get(state, ['entities', entity, entityId], {});

export default entitiesSelector;
