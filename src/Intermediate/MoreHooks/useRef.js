import { useRef, useState, useEffect } from "react";

const UseRef = () => {
  const myRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(myRef?.current?.value);
  }, [myRef?.current?.value]);

  return (
    <div>
      <input ref={myRef} value={2} />
      <p>value : {value}</p>
    </div>
  );
};

export default UseRef;
