import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';
import { ErgastCircuit } from '../../model/ErgastCircuit';
import { ErgastSeason } from '../../model/ErgastSeason';
import { ErgastRace } from '../../model/ErgastRace';
import { getCircuit, getCircuitQualifying, getCircuitResults, getCircuitSeasons } from '../../api/ErgastAPI/CircuitAPI';
import { getCircuitImageLinkFromPage } from '../../api/WikipediaAPI';

interface CircuitState {
  circuit: ErgastCircuit | undefined,
  seasons: ErgastSeason[],
  results: ErgastRace[] | undefined,
  qualifying: ErgastRace[] | undefined,
  imgLink: string | undefined,
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType
};
type GetPayloadAction = string;

const initialState: CircuitState = {
  circuit: undefined,
  seasons: [],
  results: undefined,
  qualifying: undefined,
  imgLink: undefined,
  status: 'idle',
  error: undefined
};

export const fetchCircuit = createAsyncThunk('circuit/fetchCircuit', async (circuitID: GetPayloadAction) => {
  const response = await getCircuit(circuitID);
  const seasons = await getCircuitSeasons(circuitID);
  const results = seasons[seasons.length - 1] ? await getCircuitResults(seasons[seasons.length - 1].season, circuitID) : [];
  const qualifying = seasons[seasons.length - 1] ? await getCircuitQualifying(seasons[seasons.length - 1].season, circuitID) : [];
  const imgLink = await getCircuitImageLinkFromPage(response.url, response.circuitName);
  return { response, seasons, results, qualifying, imgLink };
});

export const circuitSlice = createSlice({
  name: 'circuit',
  initialState,
  reducers: {
    setNewCircuitResults: (state, action: PayloadAction<ErgastRace[] | undefined>) => {
      state.results = action.payload;
    },
    setNewCircuitQualifying: (state, action: PayloadAction<ErgastRace[] | undefined>) => {
      state.qualifying = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCircuit.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchCircuit.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.circuit = action.payload.response;
        state.seasons = action.payload.seasons;
        state.results = action.payload.results;
        state.qualifying = action.payload.qualifying;
        state.imgLink = action.payload.imgLink;
      })
      .addCase(fetchCircuit.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export const { setNewCircuitResults, setNewCircuitQualifying } = circuitSlice.actions;

export const selectCircuit = (state: RootState) => state.circuit.circuit;
export const selectCircuitSeasons = (state: RootState) => state.circuit.seasons;
export const selectCircuitResults = (state: RootState) => state.circuit.results;
export const selectCircuitQualifying = (state: RootState) => state.circuit.qualifying;
export const selectCircuitImgLink = (state: RootState) => state.circuit.imgLink;
export const selectCircuitStatus = (state: RootState) => state.circuit.status;
export const selectCircuitError = (state: RootState) => state.circuit.error;
export const selectCircuitWhole = (state: RootState) => state.circuit;

export default circuitSlice.reducer;