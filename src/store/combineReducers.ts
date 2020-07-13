import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import LoginReducer from '@containers/login/reducer';
import DashboardReducer from '@containers/dashboard/reducer';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['user']
};

export const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, LoginReducer),
  dashboard: DashboardReducer
});

export type RootState = ReturnType<typeof rootReducer>;
