import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>
        <button onClick={handleIncrement}>Add 1 number</button>
        <h1>{count}</h1>
        <button onClick={handleDecrement}>sub 1 number</button>
      </div>
    </>
  );
};

export default UseState;
