import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErgastAPI } from '../../api/ErgastAPI';
import type { RootState } from '../store';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';
import { ErgastConstructor } from '../../model/ErgastConstructor';
import { ErgastSeason } from '../../model/ErgastSeason';

interface ConstructorState {
  constructor: ErgastConstructor | undefined,
  seasons: ErgastSeason[],
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType
};
type GetPayloadAction = string;

const initialState: ConstructorState = {
  constructor: undefined,
  seasons: [],
  status: 'idle',
  error: undefined
};

export const fetchConstructor = createAsyncThunk('constructor/fetchConstructor', async (constructorID: GetPayloadAction) => {
  const response = await ErgastAPI.getConstructor(constructorID);
  const seasons = await ErgastAPI.getConstructorSeasons(constructorID);
  return { response, seasons };
});

export const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchConstructor.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchConstructor.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.constructor = action.payload.response;
        state.seasons = action.payload.seasons;
      })
      .addCase(fetchConstructor.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export const selectConstructor = (state: RootState) => state.myConstructor.constructor
export const selectConstructorSeasons = (state: RootState) => state.myConstructor.seasons;
export const selectConstructorStatus = (state: RootState) => state.myConstructor.status;
export const selectConstructorError = (state: RootState) => state.myConstructor.error;
export const selectConstructorWhole = (state: RootState) => state.myConstructor;

export default constructorSlice.reducer;