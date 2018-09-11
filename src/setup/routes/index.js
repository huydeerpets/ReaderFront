import admincp from './admincp';
import blog from './blog';
import home from './home';
import reader from './reader';
import releases from './releases';
import user from './user';
import work from './work';

// Combined routes
const routes = {
  ...home,
  ...admincp,
  ...blog,
  ...reader,
  ...user,
  ...releases,
  ...work
};

export default routes;
