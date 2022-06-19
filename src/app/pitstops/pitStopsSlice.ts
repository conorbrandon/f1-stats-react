import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErgastAPI } from '../../api/ErgastAPI';
import type { RootState } from '../store';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';
import { ErgastPitStop } from '../../model/ErgastPitStop';

interface PitStopsState {
  pitstops?: ErgastPitStop[],
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType
};
type GetPayloadAction = {year: string, round: string};

const initialState: PitStopsState = {
  pitstops: undefined,
  status: 'idle',
  error: undefined
};

export const fetchPitStops = createAsyncThunk('pitstops/fetchPitStops', async ({year, round}: GetPayloadAction) => {
  const response = await ErgastAPI.getPitStops(year, round);
  return response;
});

export const pitStopsSlice = createSlice({
  name: 'pitstops',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchPitStops.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPitStops.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const PitStops: ErgastPitStop[] | undefined = action.payload?.PitStops || [];
        state.pitstops = PitStops;
      })
      .addCase(fetchPitStops.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    }
});

export const selectPitStops = (state: RootState) => state.pitstops.pitstops;
export const selectPitStopsStatus = (state: RootState) => state.pitstops.status;
export const selectPitStopsError = (state: RootState) => state.pitstops.error;
export const selectPitStopsWhole = (state: RootState) => state.pitstops;

export default pitStopsSlice.reducer;