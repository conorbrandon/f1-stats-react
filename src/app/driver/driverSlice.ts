import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ErgastAPI } from '../../api/ErgastAPI';
import type { RootState } from '../store';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';
import { ErgastDriver } from '../../model/ErgastDriver';
import { ErgastSeason } from '../../model/ErgastSeason';
import { ErgastRace } from '../../model/ErgastRace';

interface DriverState {
  driver: ErgastDriver | undefined,
  seasons: ErgastSeason[],
  results: ErgastRace[] | undefined,
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType
};
type GetPayloadAction = string;

const initialState: DriverState = {
  driver: undefined,
  seasons: [],
  results: undefined,
  status: 'idle',
  error: undefined
};

export const fetchDriver = createAsyncThunk('driver/fetchDriver', async (driverID: GetPayloadAction) => {
  const response = await ErgastAPI.getDriver(driverID);
  const seasons = await ErgastAPI.getDriverSeasons(driverID);
  const results = seasons[seasons.length - 1] ? await ErgastAPI.getDriverResults(seasons[seasons.length - 1].season, driverID) : [];
  return { response, seasons, results };
});

export const driverSlice = createSlice({
  name: 'driver',
  initialState,
  reducers: {
    setNewDriverResults: (state, action: PayloadAction<ErgastRace[] | undefined>) => {
      state.results = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDriver.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchDriver.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.driver = action.payload.response;
        state.seasons = action.payload.seasons;
        state.results = action.payload.results;
      })
      .addCase(fetchDriver.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export const { setNewDriverResults } = driverSlice.actions;

export const selectDriver = (state: RootState) => state.driver.driver;
export const selectDriverSeasons = (state: RootState) => state.driver.seasons;
export const selectDriverResults = (state: RootState) => state.driver.results;
export const selectDriverStatus = (state: RootState) => state.driver.status;
export const selectDriverError = (state: RootState) => state.driver.error;
export const selectDriverWhole = (state: RootState) => state.driver;

export default driverSlice.reducer;