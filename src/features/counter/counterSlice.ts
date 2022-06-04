import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '@app/store';
import fetchCount from './mockCounterAPI';

interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const { data } = await fetchCount(amount);

    return data;
  },
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, { payload }: PayloadAction<number>) {
      state.value += payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.value += payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCounter = ({ counter: { value } }: RootState) => value;

export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCounter(getState());
    const isOdd = currentValue % 2;

    if (isOdd) {
      dispatch(incrementByAmount(amount));
    }
  };

export default counterSlice.reducer;
