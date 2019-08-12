import { connect } from 'react-redux';

import DesignsPage from './DesignsPage';
import {
  designsPageGetBatchData,
  designsPageUpdateTitle,
  designsPageDeleteDesign,
} from './actions';
import { entitiesSelector, registrySelector } from '../../selectors';

const mapStateToProps = state => ({
  designsList: entitiesSelector('designs')(state, 'list'),
  filters: entitiesSelector('designs')(state, 'filters'),
  totalCount: entitiesSelector('designs')(state, 'totalCount'),
  isLoading: registrySelector(state, 'designs-list-loading'),
});

const mapDispatchToProps = dispatch => ({
  onFilter: filter => dispatch(designsPageGetBatchData(filter)),
  onTitleUpdate: (_id, title) => dispatch(designsPageUpdateTitle(_id, title)),
  onDesignDelete: _id => dispatch(designsPageDeleteDesign(_id)),
});

const DesignsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DesignsPage);

export default DesignsPageContainer;
