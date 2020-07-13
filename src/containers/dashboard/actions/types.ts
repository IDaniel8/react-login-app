import { dashboardStateModel } from '../model';

export const DASHBOARD_COLORS_REQUEST = 'DASHBOARD_COLORS_REQUEST';
export const DASHBOARD_COLORS_SUCCESS = 'DASHBOARD_COLORS_SUCCESS';
export const DASHBOARD_COLORS_ERROR = 'DASHBOARD_COLORS_ERROR';

interface DashboardColorsRequest<P> {
  type: typeof DASHBOARD_COLORS_REQUEST;
  request: Promise<P>;
}

interface DashboardColorsSuccess {
  type: typeof DASHBOARD_COLORS_SUCCESS;
  payload: typeof dashboardStateModel;
}

interface DashboardColorsError {
  type: typeof DASHBOARD_COLORS_ERROR;
  payload: typeof dashboardStateModel;
}

export type DashboardActionTypes<T = unknown> =
  | DashboardColorsRequest<T>
  | DashboardColorsSuccess
  | DashboardColorsError;
