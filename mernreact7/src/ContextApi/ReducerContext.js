import React, { useReducer } from "react";
import { createContext } from "react";
export let ReducerContextApi = createContext(0);
let initialstate = { count: 0 };
let reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      new Error("error");
  }
};

let ReducerProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, initialstate);

  let Increment = () => {
    dispatch({ type: "increment" });
  };
  let Decrement = () => {
    dispatch({ type: "decrement" });
  };
  let Reset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <ReducerContextApi.Provider value={{ state, Increment, Decrement, Reset }}>
      {children}
    </ReducerContextApi.Provider>
  );
};
export default ReducerProvider;
