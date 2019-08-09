import { connect } from 'react-redux';

import MainLayout from './MainLayout';

import { registrySelector } from '../../selectors';

const mapStateToProps = state => ({
  isLoading: registrySelector(state, 'app-loading'),
});

export default connect(mapStateToProps)(MainLayout);
