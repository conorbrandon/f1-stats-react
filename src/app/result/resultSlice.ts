import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErgastAPI } from '../../api/ErgastAPI';
import type { RootState } from '../store';
import { ErgastRace } from '../../model/ErgastRace';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';
import { getTimeZoneFromLatLng } from '../../api/TimeZones';

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
  const raceResponse = await ErgastAPI.getRace(year, round);
  const timeZone = (await getTimeZoneFromLatLng(response?.Circuit.Location.lat, response?.Circuit.Location.long));
  return {response, timeZone, raceResponse};
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
        const resultsWithPosGained = action.payload?.response?.Results?.map(result => {
          return {
            ...result,
            posGained: parseInt(result.grid) - parseInt(result.position)
          }
        }) || [];
        if (action.payload?.response) {
          action.payload.response = {...action.payload.response, Results: resultsWithPosGained};
          action.payload.response.Circuit.Location.timeZone = action.payload.timeZone;
        };
        if (action.payload && action.payload.response && action.payload.raceResponse) state.race = {...action.payload.raceResponse, ...action.payload.response};
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