import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/combineReducers';

import { getStorageToken } from '@utils/auth';
import { dashboardColorsRequest } from './actions';

import DashboardView from './view';

const Dashboard: React.SFC<unknown> = () => {
  const isFetching = useSelector(({ dashboard }: RootState) => dashboard.isFetching);
  const dashboardColors = useSelector(({ dashboard }: RootState) => dashboard.colors);
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    dispatch(dashboardColorsRequest(getStorageToken().token));
  }, []);

  return <DashboardView loading={isFetching} colors={dashboardColors} />;
};

export default Dashboard;
