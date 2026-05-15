import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [inpvalue, setInpValue] = useState(0);
  const Increased = () => {
    setCount((count) => count + 1);
  };
  const Decreased = () => {
    setCount((count) => Math.max(count - 1, 0));
  };
  const Reset = () => {
    setCount((count) => 0);
  };
  return (
    <>
      <h1>Counter</h1>
      <div className="card">Count is {count}</div>
      <div>
        <button
          onClick={() => {
            Increased();
          }}
          style={{ margin: "0 5px" }}
        >
          increased
        </button>
        <button
          onClick={() => {
            Decreased();
          }}
          style={{ margin: "0 5px" }}
        >
          decrease
        </button>
        <button
          onClick={() => {
            Reset();
          }}
          style={{ margin: "0 5px" }}
        >
          reset
        </button>
      </div>
      <div style={{ margin: "10px 0" }}>
        <input
          style={{
            width: "100px",
            border: "1px solid white",
            margin: "0 5px",
            padding: "0.6m 1.2em",
          }}
          value={inpvalue}
          onChange={(e) => {
            setInpValue(Number(e.target.value));
          }}
          type="text"
        />
        <button
          style={{
            margin: "0 5px",
          }}
          onClick={() => {
            setCount((count) => inpvalue);
          }}
        >
          Set to {inpvalue}
        </button>
      </div>
    </>
  );
}

export default App;
