import { loginModel } from '../model';
import { LoginActionTypes, LOGIN_REQUEST, LOGOUT } from './types';

import { fetchLogin, logout } from '../api';
import { UserFromServerType } from '../api/types';

export const loginActionRequest = (loginparams: typeof loginModel): LoginActionTypes<{ user: UserFromServerType }> => ({
  type: LOGIN_REQUEST,
  request: fetchLogin(loginparams)
});

export const logoutActionRequest = (): LoginActionTypes<void> => ({
  type: LOGOUT,
  callback: logout
});
