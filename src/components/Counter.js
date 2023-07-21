import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.counter;
  });
  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const incrementByFiveHandler = () => {
    dispatch({ type: "incrementby5" });
  };

  const decrementByFiveHandler = () => {
    dispatch({ type: "decrementby5" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <div>
        <button onClick={incrementByFiveHandler}>incrementby5</button>
        <button onClick={decrementByFiveHandler}>decrementby5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
