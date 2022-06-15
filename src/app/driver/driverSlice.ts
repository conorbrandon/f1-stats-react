import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErgastAPI } from '../../api/ErgastAPI';
import type { RootState } from '../store';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';
import { ErgastDriver } from '../../model/ErgastDriver';

interface DriverState {
  driver: ErgastDriver | undefined,
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType
};
type GetPayloadAction = string;

const initialState: DriverState = {
  driver: undefined,
  status: 'idle',
  error: undefined
};

export const fetchDriver = createAsyncThunk('driver/fetchDriver', async (driverID: GetPayloadAction) => {
  const response = await ErgastAPI.getDriver(driverID);
  return response;
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
        state.driver = action.payload;
      })
      .addCase(fetchDriver.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    }
});

export const selectDriver = (state: RootState) => state.driver.driver;
export const selectDriverStatus = (state: RootState) => state.driver.status;
export const selectDriverError = (state: RootState) => state.driver.error;
export const selectDriverWhole = (state: RootState) => state.driver;

export default driverSlice.reducer;