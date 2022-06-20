import "./styles.css";
import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const double = () => {
    setCount(count * 2);
  };
  return (
    <div className="App">
      <h1 style={count % 2 === 0 ? { color: "green" } : { color: "red" }}>
        Counter : {count}
      </h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={double}>Double</button>
    </div>
  );
}
