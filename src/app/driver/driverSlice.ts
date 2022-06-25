import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErgastAPI } from '../../api/ErgastAPI';
import type { RootState } from '../store';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';
import { ErgastDriver } from '../../model/ErgastDriver';
import { ErgastSeason } from '../../model/ErgastSeason';

interface DriverState {
  driver: ErgastDriver | undefined,
  seasons: ErgastSeason[],
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType
};
type GetPayloadAction = string;

const initialState: DriverState = {
  driver: undefined,
  seasons: [],
  status: 'idle',
  error: undefined
};

export const fetchDriver = createAsyncThunk('driver/fetchDriver', async (driverID: GetPayloadAction) => {
  const response = await ErgastAPI.getDriver(driverID);
  const seasons = await ErgastAPI.getDriverSeasons(driverID);
  return { response, seasons };
});

export const driverSlice = createSlice({
  name: 'driver',
  initialState,
  reducers: {

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
      })
      .addCase(fetchDriver.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export const selectDriver = (state: RootState) => state.driver.driver;
export const selectDriverSeasons = (state: RootState) => state.driver.seasons;
export const selectDriverStatus = (state: RootState) => state.driver.status;
export const selectDriverError = (state: RootState) => state.driver.error;
export const selectDriverWhole = (state: RootState) => state.driver;

export default driverSlice.reducer;