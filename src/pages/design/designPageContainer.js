import { connect } from 'react-redux';

import DesignPage from './DesignPage';
import { designPageFiltersReceive } from './actions';

const mapStateToProps = state => ({
  list: state.list,
});

const mapDispatchToProps = dispatch => ({
  onFilterReceive: filters => dispatch(designPageFiltersReceive(filters)),
});

const DesignPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DesignPage);

export default DesignPageContainer;
