import React from "react";
import { useContext } from "react";
import { ReducerContextApi } from "./../ContextApi/ReducerContext";

const UseReducerCounter = () => {
  let { state, Increment, Decrement, Reset } = useContext(ReducerContextApi);
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default UseReducerCounter;
