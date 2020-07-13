import { authStateModel } from '../model';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT = 'LOGOUT';

interface LoginActionRequest<P> {
  type: typeof LOGIN_REQUEST;
  request: Promise<P>;
}

interface LoginActionSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: typeof authStateModel;
}

interface LoginActionError {
  type: typeof LOGIN_ERROR;
  payload: typeof authStateModel;
}

interface LogoutAction {
  type: typeof LOGOUT;
  callback: () => void;
}

export type LoginActionTypes<T = unknown> =
  | LoginActionRequest<T>
  | LoginActionSuccess
  | LoginActionError
  | LogoutAction;
