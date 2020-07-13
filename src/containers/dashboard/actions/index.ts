import { DashboardActionTypes, DASHBOARD_COLORS_REQUEST } from './types';

import { fetchColors } from '../api';
import { ColorsFromServerType } from '../api/types';

export const dashboardColorsRequest = (token: string): DashboardActionTypes<{ colors: ColorsFromServerType }> => ({
  type: DASHBOARD_COLORS_REQUEST,
  request: fetchColors(token)
});
