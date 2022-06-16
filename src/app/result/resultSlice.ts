import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErgastAPI } from '../../api/ErgastAPI';
import type { RootState } from '../store';
import { ErgastRace } from '../../model/ErgastRace';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';

interface ResultState {
  race: ErgastRace | undefined,
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType
};
type GetPayloadAction = {year: string, round: string};

const initialState: ResultState = {
  race: undefined,
  status: 'idle',
  error: undefined
};

export const fetchResult = createAsyncThunk('result/fetchResult', async ({year, round}: GetPayloadAction) => {
  const response = await ErgastAPI.getRaceResult(year, round);
  return response;
});

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchResult.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchResult.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const resultsWithPosGained = action.payload?.Results?.map(result => {
          return {
            ...result,
            posGained: parseInt(result.grid) - parseInt(result.position)
          }
        }) || [];
        if (action.payload) action.payload = {...action.payload, Results: resultsWithPosGained};
        state.race = action.payload;
      })
      .addCase(fetchResult.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    }
});

export const selectResult = (state: RootState) => state.result.race;
export const selectResultStatus = (state: RootState) => state.result.status;
export const selectResultError = (state: RootState) => state.result.error;
export const selectResultWhole = (state: RootState) => state.result;

export default resultSlice.reducer;