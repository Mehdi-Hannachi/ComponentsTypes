import React, { useEffect, useState } from "react";

const FnComponent = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div>
      <h2> FnComponent </h2>

      <button onClick={increment}> + </button>

      <span> {count}</span>

      <button onClick={decrement}> - </button>

      <h1> {timer} </h1>
    </div>
  );
};

export default FnComponent;
