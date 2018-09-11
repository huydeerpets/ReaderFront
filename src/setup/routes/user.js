import Login from '../../modules/user/containers/LoginContainer';
import Signup from '../../modules/user/containers/SignupContainer';
import ActivateAccount from '../../modules/user/containers/ActivateAccountContainer';

export default {
  login: {
    path: '/auth/login',
    exact: true,
    component: Login
  },
  signup: {
    path: '/auth/signup',
    exact: true,
    component: Signup
  },
  activateAccount: {
    path: '/auth/activate_account',
    exact: true,
    component: ActivateAccount
  }
};
