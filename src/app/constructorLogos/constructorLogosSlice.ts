import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getThumbnailLinkFromPage } from '../../api/WikipediaAPI';
import { ErgastConstructor } from '../../model/ErgastConstructor';
import type { RootState } from '../store';
import { ReduxAsyncErrorType, ReduxAsyncStatusType } from '../types';

export type ConstructorLogoType = {[constructorID: string] : string} | undefined;

interface ConstructorLogosState {
  logos: ConstructorLogoType,
  status: ReduxAsyncStatusType,
  error: ReduxAsyncErrorType
};
type GetPayloadAction = ErgastConstructor;

const initialState: ConstructorLogosState = {
  logos: undefined,
  status: 'idle',
  error: undefined
};

export const fetchConstructorLogo = createAsyncThunk('constructorLogos/fetchLogo', async (constructor: GetPayloadAction) => {
  const srcUrl = await getThumbnailLinkFromPage(constructor.url);
  return {[constructor.constructorId]: srcUrl};
});

export const constructorLogosSlice = createSlice({
  name: 'constructorLogos',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchConstructorLogo.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchConstructorLogo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.logos = {...state.logos, ...action.payload};
      })
      .addCase(fetchConstructorLogo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    }
});

export const selectConstructorLogos = (state: RootState) => state.constructorLogos.logos;
export const selectConstructorLogosStatus = (state: RootState) => state.constructorLogos.status;
export const selectConstructorLogosError = (state: RootState) => state.constructorLogos.error;
export const selectConstructorLogosWhole = (state: RootState) => state.constructorLogos;

export default constructorLogosSlice.reducer;