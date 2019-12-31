import React from "react";
import useCounter from "../hooks/useCounter";

function Counter() {
  const { count, onIncrease, onDecrease, onIncreaseBy } = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>PLUS</button>
      <button onClick={onDecrease}>MINUS</button>
      <button onClick={_ => onIncreaseBy(5)}>PLUS 5</button>
    </div>
  );
}

export default Counter;
