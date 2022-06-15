import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErgastAPI } from '../../api/ErgastAPI';
import type { RootState } from '../../app/store';
import { ErgastRace } from '../../model/ErgastRace';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';

interface ScheduleState {
  schedule: ErgastRace[],
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType
};
type GetPayloadAction = string;

const initialState: ScheduleState = {
  schedule: [],
  status: 'idle',
  error: undefined
};

export const fetchSchedule = createAsyncThunk('schedule/fetchSchedule', async (year: GetPayloadAction) => {
  const response = await ErgastAPI.getSchedule(year);
  return response;
});

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchSchedule.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchSchedule.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.schedule = action.payload;
      })
      .addCase(fetchSchedule.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    }
});

export const selectSchedule = (state: RootState) => state.schedule.schedule;
export const selectScheduleStatus = (state: RootState) => state.schedule.status;
export const selectScheduleError = (state: RootState) => state.schedule.error;
export const selectScheduleWhole = (state: RootState) => state.schedule;

export default scheduleSlice.reducer;