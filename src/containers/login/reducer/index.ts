import { LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, LoginActionTypes } from '../actions/types';
import { authStateModel } from '../model';

const initialState: typeof authStateModel = { ...authStateModel };

const reducer = (state = initialState, action: LoginActionTypes): typeof authStateModel => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isFetching: true };
    case LOGIN_SUCCESS:
      return { ...state, isFetching: false, error: initialState.error, user: action.payload.user };
    case LOGIN_ERROR:
      return {
        isFetching: false,
        user: initialState.user,
        error: [...state.error.filter((e) => e !== action.payload.error), action.payload.error]
      };
    case LOGOUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default reducer;
