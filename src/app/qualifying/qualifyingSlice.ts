import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErgastAPI } from '../../api/ErgastAPI';
import type { RootState } from '../store';
import { ErgastRace } from '../../model/ErgastRace';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';
import { useAppSelector } from '../hooks';

interface QualifyingState {
  qualifying: ErgastRace | undefined,
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType
};
type GetPayloadAction = {year: string, round: string};

const initialState: QualifyingState = {
  qualifying: undefined,
  status: 'idle',
  error: undefined
};

export const fetchQualifying = createAsyncThunk('qualifying/fetchQualifying', async ({year, round}: GetPayloadAction) => {
  const response = await ErgastAPI.getRaceQualifying(year, round);
  return response;
});

export const qualifyingSlice = createSlice({
  name: 'qualifying',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchQualifying.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchQualifying.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched posts to the array
        state.qualifying = action.payload;
      })
      .addCase(fetchQualifying.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    }
});

export const selectQualifying = (state: RootState) => state.qualifying.qualifying;
export const selectQualifyingStatus = (state: RootState) => state.qualifying.status;
export const selectQualifyingError = (state: RootState) => state.qualifying.error;
export const selectQualifyingWhole = (state: RootState) => state.qualifying;

export default qualifyingSlice.reducer;