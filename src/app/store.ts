import { configureStore } from '@reduxjs/toolkit';
import { logger } from "redux-logger";
import counterReducer from './counter/counterSlice';
import scheduleReducer from './schedule/scheduleSlice';
import resultReducer from './result/resultSlice';
import qualifyingReducer from './qualifying/qualifyingSlice';
import driversReducer from './drivers/driversSlice';
import driverReducer from './driver/driverSlice';
import lapsReducer from './laps/lapsSlice';
import pitStopsReducer from './pitstops/pitStopsSlice';

const middleware = [logger]; // always put logger last

export const store =  configureStore({
  reducer: {
    counter: counterReducer,
    schedule: scheduleReducer,
    result: resultReducer,
    qualifying: qualifyingReducer,
    drivers: driversReducer,
    driver: driverReducer,
    laps: lapsReducer,
    pitstops: pitStopsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middleware),
  devTools: true
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;