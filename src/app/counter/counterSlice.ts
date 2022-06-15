import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Define a type for the slice state
interface CounterState {
  value: number
};

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // define the reduce and prepare function to treat the reduce more like a normal function with arguments
    incrementByAmount: {
      reducer(state, action: PayloadAction<number>) {
        state.value += action.payload;
      },
      prepare(incrementValue) {
        return {
          payload: incrementValue
        }
      }
    }
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// Pass this function to the useSelector hook
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;