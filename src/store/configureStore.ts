import { Store, Action, createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { reduxReqMiddleware } from './middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';

import { rootReducer, RootState } from './combineReducers';

const middleware = [reduxReqMiddleware()];
if (process.env.NODE_ENV === 'development') middleware.push(logger);

export const store: Store<RootState, Action> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
