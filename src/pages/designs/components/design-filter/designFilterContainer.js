import { connect } from 'react-redux';

import DesignFilter from './DesignFilter';
import { entitiesSelector } from '../../../../selectors';
import { designsPageGetBatchData } from '../../actions';

const mapStateToProps = state => ({
  filters: entitiesSelector('designs')(state, 'filters'),
});

const mapDispatchToProps = dispatch => ({
  onFilter: filter => dispatch(designsPageGetBatchData(filter)),
});

const DesignFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DesignFilter);

export default DesignFilterContainer;
