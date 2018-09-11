import Dashboard from '../../modules/admin/Dashboard';
import WorkCreateOrEdit from '../../modules/admin/works/CreateOrEdit';
import WorkDetail from '../../modules/admin/works/Detail';
import WorkList from '../../modules/admin/works/List';
import ChapterCreateOrEdit from '../../modules/admin/chapters/CreateOrEdit';
import ChapterDetail from '../../modules/admin/chapters/Detail';

export default {
  dashboard: {
    path: '/admincp/dashboard',
    component: Dashboard,
    auth: true,
    exact: true
  },
  workCreate: {
    path: '/admincp/work/add',
    component: WorkCreateOrEdit,
    auth: true,
    exact: true
  },
  workEdit: {
    path: '/admincp/work/edit/:stub"',
    component: WorkCreateOrEdit,
    auth: true,
    exact: true
  },
  workList: {
    path: '/admincp/work/manage',
    component: WorkList,
    auth: true,
    exact: true
  },
  workDetail: {
    path: '/admincp/work/:workId/:stub',
    component: WorkDetail,
    auth: true,
    exact: true
  },
  chapterCreate: {
    path: '/admincp/work/:workId/:stub/chapter/add',
    component: ChapterCreateOrEdit,
    auth: true,
    exact: true
  },
  chapterEdit: {
    path: '/admincp/work/:workId/:stub/chapter/edit/:chapterId',
    component: ChapterCreateOrEdit,
    auth: true,
    exact: true
  },
  chapterDetail: {
    path: '/admincp/work/:workId/:stub/chapter/:chapterId',
    component: ChapterDetail,
    auth: true,
    exact: true
  }
};
