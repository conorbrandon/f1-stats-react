import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ErgastAPI } from '../../api/ErgastAPI';
import type { RootState } from '../store';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';
import { ErgastConstructor } from '../../model/ErgastConstructor';
import { ErgastSeason } from '../../model/ErgastSeason';
import { ErgastRace } from '../../model/ErgastRace';

interface ConstructorState {
  constructor: ErgastConstructor | undefined,
  seasons: ErgastSeason[],
  results: ErgastRace[] | undefined,
  qualifying: ErgastRace[] | undefined,
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType
};
type GetPayloadAction = string;

const initialState: ConstructorState = {
  constructor: undefined,
  seasons: [],
  results: undefined,
  qualifying: undefined,
  status: 'idle',
  error: undefined
};

export const fetchConstructor = createAsyncThunk('constructor/fetchConstructor', async (constructorID: GetPayloadAction) => {
  const response = await ErgastAPI.getConstructor(constructorID);
  const seasons = await ErgastAPI.getConstructorSeasons(constructorID);
  const results = seasons[seasons.length - 1] ? await ErgastAPI.getConstructorResults(seasons[seasons.length - 1].season, constructorID) : [];
  const qualifying = seasons[seasons.length - 1] ? await ErgastAPI.getConstructorQualifying(seasons[seasons.length - 1].season, constructorID) : [];
  return { response, seasons, results, qualifying };
});

export const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    setNewConstructorResults: (state, action: PayloadAction<ErgastRace[]>) => {
      state.results = action.payload;
    },
    setNewConstructorQualifying: (state, action: PayloadAction<ErgastRace[]>) => {
      state.qualifying = action.payload;
    }
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
        state.results = action.payload.results;
        state.qualifying = action.payload.qualifying;
      })
      .addCase(fetchConstructor.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export const { setNewConstructorResults, setNewConstructorQualifying } = constructorSlice.actions;

export const selectConstructor = (state: RootState) => state.myConstructor.constructor
export const selectConstructorSeasons = (state: RootState) => state.myConstructor.seasons;
export const selectConstructorResults = (state: RootState) => state.myConstructor.results;
export const selectConstructorQualifying = (state: RootState) => state.myConstructor.qualifying;
export const selectConstructorStatus = (state: RootState) => state.myConstructor.status;
export const selectConstructorError = (state: RootState) => state.myConstructor.error;
export const selectConstructorWhole = (state: RootState) => state.myConstructor;

export default constructorSlice.reducer;