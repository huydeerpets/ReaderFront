import Work from '../../modules/work/containers/WorkContainer';
import Works from '../../modules/works/containers/WorksContainer';

export default {
  works: {
    path: '/work/all',
    exact: true,
    component: Works
  },
  work: {
    path: '/work/:stub',
    exact: true,
    component: Work
  }
};
