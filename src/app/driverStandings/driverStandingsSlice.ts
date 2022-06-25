import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErgastAPI } from '../../api/ErgastAPI';
import type { RootState } from '../store';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';
import { ErgastStandingList } from '../../model/ErgastStandingList';

interface DriverStandingsState {
  driverStandings?: ErgastStandingList,
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType
};
type GetPayloadAction = string;

const initialState: DriverStandingsState = {
  driverStandings: undefined,
  status: 'idle',
  error: undefined
};

export const fetchDriverStandings = createAsyncThunk('driverStandings/fetchDriverStandings', async (year: GetPayloadAction) => {
  const response = await ErgastAPI.getDriverStandings(year);
  return response;
});

export const driverStandingsSlice = createSlice({
  name: 'driverStandings',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchDriverStandings.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchDriverStandings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.driverStandings = action.payload;
      })
      .addCase(fetchDriverStandings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    }
});

export const selectDriverStandings = (state: RootState) => state.driverStandings.driverStandings;
export const selectDriverStandingsStatus = (state: RootState) => state.driverStandings.status;
export const selectDriverStandingsError = (state: RootState) => state.driverStandings.error;
export const selectDriverStandingsWhole = (state: RootState) => state.driverStandings;

export default driverStandingsSlice.reducer;