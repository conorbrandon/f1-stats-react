import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';
import { ErgastCircuit } from '../../model/ErgastCircuit';
import { getAllF1Circuits, getCircuitsByYear } from '../../api/ErgastAPI/CircuitAPI';

interface CircuitsState {
  circuits: ErgastCircuit[],
  circuitIDSetSimple: string[],
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType
};
type GetPayloadAction = string;

const initialState: CircuitsState = {
  circuits: [],
  circuitIDSetSimple: [],
  status: 'idle',
  error: undefined
};

export const fetchCircuits = createAsyncThunk('circuits/fetchCircuits', async (year: GetPayloadAction) => {
  if (year !== 'all') {
    const response = await getCircuitsByYear(year);
    return response;
  } else {
    const response = await getAllF1Circuits();
    return response;
  }
});

export const circuitsSlice = createSlice({
  name: 'circuits',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchCircuits.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchCircuits.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.circuits = action.payload;
        state.circuitIDSetSimple = action.payload.map(circuit => circuit.circuitId);
      })
      .addCase(fetchCircuits.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    }
});

export const selectCircuits = (state: RootState) => state.circuits.circuits;
export const selectCircuitIDSetSimple = (state: RootState) => state.circuits.circuitIDSetSimple;
export const selectCircuitsStatus = (state: RootState) => state.circuits.status;
export const selectCircuitsError = (state: RootState) => state.circuits.error;
export const selectCircuitsWhole = (state: RootState) => state.circuits;

export default circuitsSlice.reducer;