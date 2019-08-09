import { connect } from 'react-redux';

import DesignsPage from './DesignsPage';
import { designsPageFiltersReceive } from './actions';
import { entitiesSelector } from '../../selectors';

const mapStateToProps = state => ({
  designsList: entitiesSelector('designs')(state, 'list'),
});

const mapDispatchToProps = dispatch => ({
  onFilterReceive: filters => dispatch(designsPageFiltersReceive(filters)),
});

const DesignsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DesignsPage);

export default DesignsPageContainer;
