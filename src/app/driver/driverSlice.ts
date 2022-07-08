import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';
import { ErgastDriver } from '../../model/ErgastDriver';
import { ErgastSeason } from '../../model/ErgastSeason';
import { ErgastRace } from '../../model/ErgastRace';
import { getDriver, getDriverSeasons, getDriverResults, getDriverQualifying } from '../../api/ErgastAPI/DriverAPI';

interface DriverState {
  driver: ErgastDriver | undefined,
  seasons: ErgastSeason[],
  results: ErgastRace[] | undefined,
  qualifying: ErgastRace[] | undefined,
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType
};
type GetPayloadAction = string;

const initialState: DriverState = {
  driver: undefined,
  seasons: [],
  results: undefined,
  qualifying: undefined,
  status: 'idle',
  error: undefined
};

export const fetchDriver = createAsyncThunk('driver/fetchDriver', async (driverID: GetPayloadAction) => {
  const response = await getDriver(driverID);
  const seasons = await getDriverSeasons(driverID);
  const results = seasons[seasons.length - 1] ? await getDriverResults(seasons[seasons.length - 1].season, driverID) : [];
  const qualifying = seasons[seasons.length - 1] ? await getDriverQualifying(seasons[seasons.length - 1].season, driverID) : [];
  return { response, seasons, results, qualifying };
});

export const driverSlice = createSlice({
  name: 'driver',
  initialState,
  reducers: {
    setNewDriverResults: (state, action: PayloadAction<ErgastRace[] | undefined>) => {
      state.results = action.payload;
    },
    setNewDriverQualifying: (state, action: PayloadAction<ErgastRace[] | undefined>) => {
      state.qualifying = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDriver.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchDriver.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.driver = action.payload.response;
        state.seasons = action.payload.seasons;
        state.results = action.payload.results;
        state.qualifying = action.payload.qualifying;
      })
      .addCase(fetchDriver.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export const { setNewDriverResults, setNewDriverQualifying } = driverSlice.actions;

export const selectDriver = (state: RootState) => state.driver.driver;
export const selectDriverSeasons = (state: RootState) => state.driver.seasons;
export const selectDriverResults = (state: RootState) => state.driver.results;
export const selectDriverQualifying = (state: RootState) => state.driver.qualifying;
export const selectDriverStatus = (state: RootState) => state.driver.status;
export const selectDriverError = (state: RootState) => state.driver.error;
export const selectDriverWhole = (state: RootState) => state.driver;

export default driverSlice.reducer;