import { connect } from 'react-redux';

import Process from './Process';

import { entitiesSelector, registrySelector } from '../../../../selectors';

const mapStateToProps = state => ({
  process: entitiesSelector('designs')(state, 'process'),
  isLoading: registrySelector(state, 'process-loading'),
});

const ProcessContainer = connect(mapStateToProps)(Process);

export default ProcessContainer;
