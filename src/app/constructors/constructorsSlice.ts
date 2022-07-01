import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErgastAPI } from '../../api/ErgastAPI';
import type { RootState } from '../store';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';
import { ErgastConstructor } from '../../model/ErgastConstructor';

interface ConstructorsState {
  constructors: ErgastConstructor[],
  constructorIDSetSimple: string[],
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType
};
type GetPayloadAction = string;

const initialState: ConstructorsState = {
  constructors: [],
  constructorIDSetSimple: [],
  status: 'idle',
  error: undefined
};

export const fetchConstructors = createAsyncThunk('constructors/fetchConstructors', async (year: GetPayloadAction) => {
  if (year !== 'all') {
    const response = await ErgastAPI.getConstructorsByYear(year);
    return response;
  } else {
    const response = await ErgastAPI.getAllF1Constructors();
    return response;
  }
});

export const constructorsSlice = createSlice({
  name: 'constructors',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchConstructors.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchConstructors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.constructors = action.payload;
        state.constructorIDSetSimple = action.payload.map(constructor => constructor.constructorId);
      })
      .addCase(fetchConstructors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    }
});

export const selectConstructors = (state: RootState) => state.myConstructors.constructors;
export const selectConstructorIDSetSimple = (state: RootState) => state.myConstructors.constructorIDSetSimple;
export const selectConstructorsStatus = (state: RootState) => state.myConstructors.status;
export const selectConstructorsError = (state: RootState) => state.myConstructors.error;
export const selectConstructorsWhole = (state: RootState) => state.myConstructors;

export default constructorsSlice.reducer;