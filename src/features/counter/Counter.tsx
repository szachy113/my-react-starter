import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';

export default function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(increment())} type="button">
          +
        </button>
        <button onClick={() => dispatch(decrement())} type="button">
          -
        </button>
      </div>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() => dispatch(incrementByAmount(incrementValue))}
          type="button"
        >
          Add Amount
        </button>
        <button
          onClick={() => dispatch(incrementAsync(incrementValue))}
          type="button"
        >
          Add Async
        </button>
        <button
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
          type="button"
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
