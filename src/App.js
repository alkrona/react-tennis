import { useState } from "react";
import Die from "./components/Die";

function App() {
  const dieValues_temp = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [dieValues, setDieValues] = useState(dieValues_temp.map(() => {
    return Math.floor(Math.random() * (9 - 1 + 1)) + 1;
  }));

  return (
    <div className="App">
      <div className="Information">
        <h1>Tenzies</h1>
        <h3>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h3>
      </div>
      
    <div className="DieArray">
      {dieValues.map(die_val => {
        return <Die value={die_val} key={die_val} />;
      })}
    </div>
  
      <div className="ResetButton">
      <button>Roll</button>
      </div>
    </div>
  );
}

export default App;
