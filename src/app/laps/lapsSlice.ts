import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErgastAPI } from '../../api/ErgastAPI';
import type { RootState } from '../store';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';
import { ErgastLap } from '../../model/ErgastLap';
// // Extras
// import { shuffle } from '../../helpers/GenericHelpers';
// import { interpolateRainbow } from 'd3-scale-chromatic';

// type SelectedDriversElement = { driverID: string, isSelected: boolean, driverColor: string, value: string, label: string };
// type SelectedDrivers = SelectedDriversElement[];

interface LapTimesState {
  laps: ErgastLap[],
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType,
  // selectedDrivers: SelectedDrivers
};
type GetPayloadAction = {year: string, round: string};

const initialState: LapTimesState = {
  laps: [],
  status: 'idle',
  error: undefined,
  // selectedDrivers: []
};

export const fetchLaps = createAsyncThunk('laps/fetchLaps', async ({year, round}: GetPayloadAction) => {
  const response = await ErgastAPI.getLapTimes(year, round);
  return response;
});

export const lapsSlice = createSlice({
  name: 'laps',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchLaps.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchLaps.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const Laps: ErgastLap[] = action.payload?.Laps || [];
        state.laps = Laps;
        // // Extras
        // const numDrivers = Laps[0].Timings.length;
        // const randomColorIndexSet: number[] = shuffle(Array.from({ length: numDrivers }, (_, i: number) => i));
        // state.selectedDrivers = Laps[0].Timings.map((timing, _i) => {
        //   return {
        //     driverID: timing.driverId,
        //     isSelected: true,
        //     driverColor: interpolateRainbow(randomColorIndexSet[_i] / numDrivers),
        //     value: timing.driverId,
        //     label: timing.driverId
        //   };
        // });
      })
      .addCase(fetchLaps.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    }
});

export const selectLaps = (state: RootState) => state.laps.laps;
export const selectLapsStatus = (state: RootState) => state.laps.status;
export const selectLapsError = (state: RootState) => state.laps.error;
export const selectLapsWhole = (state: RootState) => state.laps;

export default lapsSlice.reducer;