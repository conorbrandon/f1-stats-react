import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErgastAPI } from '../../api/ErgastAPI';
import type { RootState } from '../store';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';
import { ErgastDriver } from '../../model/ErgastDriver';

interface DriversState {
  drivers: ErgastDriver[],
  driverIDSetSimple: string[],
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType
};
type GetPayloadAction = string;

const initialState: DriversState = {
  drivers: [],
  driverIDSetSimple: [],
  status: 'idle',
  error: undefined
};

export const fetchDrivers = createAsyncThunk('drivers/fetchDriver', async (year: GetPayloadAction) => {
  const response = await ErgastAPI.getDriversByYear(year);
  return response;
});

export const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchDrivers.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchDrivers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.drivers = action.payload;
        state.driverIDSetSimple = action.payload.map(driver => driver.driverId);
      })
      .addCase(fetchDrivers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    }
});

export const selectDrivers = (state: RootState) => state.drivers.drivers;
export const selectDriverIDSetSimple = (state: RootState) => state.drivers.driverIDSetSimple;
export const selectDriversStatus = (state: RootState) => state.drivers.status;
export const selectDriversError = (state: RootState) => state.drivers.error;
export const selectDriversWhole = (state: RootState) => state.drivers;

export default driversSlice.reducer;