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
import constructorLogosReducer from './constructorLogos/constructorLogosSlice';
import driverStandingsReducer from './driverStandings/driverStandingsSlice';
import constructorStandingsReducer from './constructorStandings/constructorStandingsSlice';
import constructorReducer from './constructor/constructorSlice';
import constructorsReducer from './constructors/constructorsSlice';
import circuitReducer from './circuit/circuitSlice';
import circuitsReducer from './circuits/circuitsSlice';

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
    pitstops: pitStopsReducer,
    constructorLogos: constructorLogosReducer,
    driverStandings: driverStandingsReducer,
    constructorStandings: constructorStandingsReducer,
    myConstructor: constructorReducer,
    myConstructors: constructorsReducer,
    circuit: circuitReducer,
    circuits: circuitsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middleware),
  devTools: true
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;