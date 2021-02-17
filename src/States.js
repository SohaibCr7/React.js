import React, { useState,useEffect } from "react";

function States() {

  const [checked, setChecked] = useState(false);

  const [counter,setCounter] = useState(0)
  useEffect(() => {
    setCounter(5)
  }, [counter])

  return (
    <>
    <h1>Thorugh UseState</h1>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <p> {checked ? "checked" : "not checked"}</p>
      
      <button type="button" onClick={() => setCounter(counter+1)}>+</button>
      <button type="button" onClick={() => setCounter(counter -1)}>-</button>
      <p>Counter: {counter}</p>
    </>
  );
}

export default States;
