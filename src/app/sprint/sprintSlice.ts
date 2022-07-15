import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { ErgastRace } from '../../model/ErgastRace';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';
import { getSprintQualifying } from '../../api/ErgastAPI/RaceAPI';

interface SprintState {
  sprint: ErgastRace | undefined,
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType
};
type GetPayloadAction = {year: string, round: string};

const initialState: SprintState = {
  sprint: undefined,
  status: 'idle',
  error: undefined
};

export const fetchSprint = createAsyncThunk('sprint/fetchSprint', async ({year, round}: GetPayloadAction) => {
  console.log('fetchSprint', { year, round });
  const response = await getSprintQualifying(year, round);
  return {data: response};
});

export const sprintSlice = createSlice({
  name: 'sprint',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchSprint.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchSprint.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const resultsWithPosGained = action.payload?.data?.SprintResults?.map(result => {
          return {
            ...result,
            posGained: parseInt(result.grid) - parseInt(result.position)
          }
        }) || [];
        if (action.payload?.data && resultsWithPosGained.length) {
          action.payload.data = {...action.payload.data, SprintResults: resultsWithPosGained};
        };
        if (JSON.stringify(action.payload.data) !== "{}") state.sprint = action.payload.data;
        else state.sprint = undefined;
      })
      .addCase(fetchSprint.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    }
});

export const selectSprint = (state: RootState) => state.sprint.sprint;
export const selectSprintStatus = (state: RootState) => state.sprint.status;
export const selectSprintError = (state: RootState) => state.sprint.error;
export const selectSprintWhole = (state: RootState) => state.sprint;

export default sprintSlice.reducer;