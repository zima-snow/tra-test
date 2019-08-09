import DesignPageContainer from '../pages/design';

import { MainLayout } from '../layouts';

import { traTestShowPage } from '../actions';

export default {
  designs: {
    path: '/designs',
    exact: true,
    title: 'Designs',
    component: DesignPageContainer,
    layout: MainLayout,
    onEnterAction: traTestShowPage('designs', 'show'),
  },
  designEdit: {
    path: '/design/:id',
    exact: true,
    title: 'Design Edit',
    component: DesignPageContainer,
    layout: MainLayout,
    onEnterAction: traTestShowPage('design', 'edit'),
  },
};
