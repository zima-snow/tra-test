import DesignsPageContainer from '../pages/designs';
import { ProcessContainer } from '../pages/designs/components';

import { MainLayout } from '../layouts';

import { traTestShowPage } from '../actions';

export default {
  designs: {
    path: '/designs',
    exact: true,
    title: 'Designs',
    component: DesignsPageContainer,
    layout: MainLayout,
    onEnterAction: traTestShowPage('designs', 'show'),
  },
  designEdit: {
    path: '/process/:id',
    exact: true,
    title: 'Process',
    component: ProcessContainer,
    layout: MainLayout,
    onEnterAction: traTestShowPage('process', 'show'),
  },
};
