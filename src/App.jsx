import { useState } from "react";
import "./App.css";
import { ContentText } from "./Counter";

function App() {
  const [cost, setCost] = useState(1);

  const plus = () => {
    setCost(cost + 1);
  };
  const negative = () => {
    setCost(cost - 1);
  };
  const reset = () => {
    setCost(cost * 0);
  };

  return (
    <div className="App">;
      <ContentText value={cost} text="Counter" />
      <button onClick={plus}>increase</button>
      <button onClick={negative}>decrease</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
