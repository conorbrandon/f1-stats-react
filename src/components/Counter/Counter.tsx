import React from "react";
import { decrement, increment, incrementByAmount, selectCount } from "../../app/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./Counter.module.css";



export const Counter = ({ }) => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  return (
    <div className="page-content">
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment value by 3"
          onClick={() => dispatch(incrementByAmount(3))}
        >
          Increment value by 3
        </button>
      </div>
    </div>
  );
};
