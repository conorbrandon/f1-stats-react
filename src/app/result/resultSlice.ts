import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErgastAPI } from '../../api/ErgastAPI';
import type { RootState } from '../store';
import { ErgastRace } from '../../model/ErgastRace';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';
import { getTimeZoneFromLatLng } from '../../api/TimeZones';

interface ResultState {
  race: ErgastRace | undefined,
  timeZone: string | undefined,
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType
};
type GetPayloadAction = {year: string, round: string};

const initialState: ResultState = {
  race: undefined,
  timeZone: undefined,
  status: 'idle',
  error: undefined
};

export const fetchResult = createAsyncThunk('result/fetchResult', async ({year, round}: GetPayloadAction) => {
  console.log('fetchResult', { year, round });
  const response = await ErgastAPI.getRaceResult(year, round);
  const raceResponse = await ErgastAPI.getRace(year, round);
  const timeZone = (await getTimeZoneFromLatLng(raceResponse?.Circuit.Location.lat, raceResponse?.Circuit.Location.long));
  return {data: {...raceResponse, ...response }, timeZone};
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
        console.log('thing', {action});
        const resultsWithPosGained = action.payload?.data?.Results?.map(result => {
          return {
            ...result,
            posGained: parseInt(result.grid) - parseInt(result.position)
          }
        }) || [];
        if (action.payload?.data && resultsWithPosGained.length) {
          action.payload.data = {...action.payload.data, Results: resultsWithPosGained};
        };
        if (JSON.stringify(action.payload.data) !== "{}") state.race = action.payload.data;
        else state.race = undefined;
        if (action.payload.timeZone) state.timeZone = action.payload.timeZone;
      })
      .addCase(fetchResult.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    }
});

export const selectResult = (state: RootState) => state.result.race;
export const selectResultTimeZone = (state: RootState) => state.result.timeZone;
export const selectResultStatus = (state: RootState) => state.result.status;
export const selectResultError = (state: RootState) => state.result.error;
export const selectResultWhole = (state: RootState) => state.result;

export default resultSlice.reducer;