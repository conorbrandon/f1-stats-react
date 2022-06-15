import { configureStore } from '@reduxjs/toolkit';
import { logger } from "redux-logger";
import counterReducer from './counter/counterSlice';
import scheduleReducer from './schedule/scheduleSlice';
import resultReducer from './result/resultSlice';
import qualifyingReducer from './qualifying/qualifyingSlice';

const middleware = [logger]; // always put logger last

export const store =  configureStore({
  reducer: {
    counter: counterReducer,
    schedule: scheduleReducer,
    result: resultReducer,
    qualifying: qualifyingReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middleware),
  devTools: true
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;