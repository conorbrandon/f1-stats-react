import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { ErgastRace } from '../../model/ErgastRace';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';
import { TimeHelper } from '../../helpers/TimeHelper';
import { ErgastQualifyingResult } from '../../model/ErgastQualifyingResult';
import { getRaceQualifying } from '../../api/ErgastAPI/RaceAPI';

interface QualifyingState {
  qualifying: ErgastRace | undefined,
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType,
  bestTimesFromEachSession?: {
    bestQ1Time: number,
    bestQ2Time: number,
    bestQ3Time: number
  }
};
type GetPayloadAction = {year: string, round: string};

const initialState: QualifyingState = {
  qualifying: undefined,
  status: 'idle',
  error: undefined
};

export const fetchQualifying = createAsyncThunk('qualifying/fetchQualifying', async ({year, round}: GetPayloadAction) => {
  const response = await getRaceQualifying(year, round);
  return response;
});

export const qualifyingSlice = createSlice({
  name: 'qualifying',
  initialState,
  reducers: {
    setUpdatedQualifyingResults: (state, action: PayloadAction<ErgastQualifyingResult[]>) => {
      if (state.qualifying?.QualifyingResults) state.qualifying.QualifyingResults = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQualifying.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchQualifying.fulfilled, (state, action) => {
        state.status = 'succeeded';
        let bestQ1Time = Infinity;
        let bestQ2Time = Infinity;
        let bestQ3Time = Infinity;
        action.payload?.QualifyingResults?.forEach(result => {
          const q1 = TimeHelper.raceTimeToMs(result.Q1);
          const q2 = TimeHelper.raceTimeToMs(result.Q2);
          const q3 = TimeHelper.raceTimeToMs(result.Q3);
          if (q1 < bestQ1Time) bestQ1Time = q1;
          if (q2 < bestQ2Time) bestQ2Time = q2;
          if (q3 < bestQ3Time) bestQ3Time = q3;
        });
        state.qualifying = action.payload;
        state.bestTimesFromEachSession = { bestQ1Time, bestQ2Time, bestQ3Time };
      })
      .addCase(fetchQualifying.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    }
});

export const { setUpdatedQualifyingResults } = qualifyingSlice.actions;

export const selectQualifying = (state: RootState) => state.qualifying.qualifying;
export const selectBestTimesFromEachSession = (state: RootState) => state.qualifying.bestTimesFromEachSession;
export const selectQualifyingStatus = (state: RootState) => state.qualifying.status;
export const selectQualifyingError = (state: RootState) => state.qualifying.error;
export const selectQualifyingWhole = (state: RootState) => state.qualifying;

export default qualifyingSlice.reducer;