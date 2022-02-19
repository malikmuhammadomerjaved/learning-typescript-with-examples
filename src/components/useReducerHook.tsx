import { useReducer } from "react";

//
//
//Example with loose type check
type CounterState = {
  count: number;
};

type CounterAction = {
  type: string;
  payload: number;
};

const initialState = { count: 0 };

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
    </>
  );
};

//
//
//Example with STRICT type check
type CounterState2 = {
  count: number;
};

type UpdateAction2 = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction2 = {
  type: "reset";
};

type CounterAction2 = UpdateAction2 | ResetAction2;

const initialState2 = { count: 0 };

const reducer2 = (state: CounterState2, action: CounterAction2) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState2;
    default:
      return state;
  }
};

export const Counter2 = () => {
  const [state, dispatch] = useReducer(reducer2, initialState2);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};
