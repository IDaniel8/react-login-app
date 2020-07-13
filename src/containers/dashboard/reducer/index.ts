import {
  DASHBOARD_COLORS_REQUEST,
  DASHBOARD_COLORS_ERROR,
  DASHBOARD_COLORS_SUCCESS,
  DashboardActionTypes
} from '../actions/types';
import { dashboardStateModel } from '../model';

const initialState: typeof dashboardStateModel = { ...dashboardStateModel };

const reducer = (state = initialState, action: DashboardActionTypes): typeof dashboardStateModel => {
  switch (action.type) {
    case DASHBOARD_COLORS_REQUEST:
      return { ...state, isFetching: true };
    case DASHBOARD_COLORS_SUCCESS:
      return { ...state, isFetching: false, error: initialState.error, colors: action.payload.colors };
    case DASHBOARD_COLORS_ERROR:
      return {
        isFetching: false,
        colors: initialState.colors,
        error: [...state.error.filter((e) => e !== action.payload.error), action.payload.error]
      };
    default:
      return state;
  }
};

export default reducer;
