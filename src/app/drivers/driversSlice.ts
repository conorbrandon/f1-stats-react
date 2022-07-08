import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';
import { ErgastDriver } from '../../model/ErgastDriver';
import { getAllF1Drivers, getDriversByYear } from '../../api/ErgastAPI/DriverAPI';

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

export const fetchDrivers = createAsyncThunk('drivers/fetchDrivers', async (year: GetPayloadAction) => {
  if (year !== 'all') {
    const response = await getDriversByYear(year);
    return response;
  } else {
    const response = await getAllF1Drivers();
    return response;
  }
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