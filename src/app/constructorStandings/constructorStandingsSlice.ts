import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErgastAPI } from '../../api/ErgastAPI';
import type { RootState } from '../store';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';
import { ErgastStandingList } from '../../model/ErgastStandingList';

interface ConstructorStandingsState {
  constructorStandings?: ErgastStandingList,
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType
};
type GetPayloadAction = string;

const initialState: ConstructorStandingsState = {
  constructorStandings: undefined,
  status: 'idle',
  error: undefined
};

export const fetchConstructorStandings = createAsyncThunk('constructorStandings/fetchConstructorStandings', async (year: GetPayloadAction) => {
  const response = await ErgastAPI.getConstructorStandings(year);
  return response;
});

export const constructorStandingsSlice = createSlice({
  name: 'constructorStandings',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchConstructorStandings.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchConstructorStandings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.constructorStandings = action.payload;
      })
      .addCase(fetchConstructorStandings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    }
});

export const selectConstructorStandings = (state: RootState) => state.constructorStandings.constructorStandings;
export const selectConstructorStandingsStatus = (state: RootState) => state.constructorStandings.status;
export const selectConstructorStandingsError = (state: RootState) => state.constructorStandings.error;
export const selectConstructorStandingsWhole = (state: RootState) => state.constructorStandings;

export default constructorStandingsSlice.reducer;