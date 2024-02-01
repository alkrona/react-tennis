import { useState } from "react";
import Die from "./components/Die";

import dies from "./components/dies";
function App() {
  const dieValues_temp = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [dieValues, setDieValues] = useState(dies)
  function resetAll(){
    setDieValues(prevValue=>{
      return prevValue.map(currentValue=>{
        return {...currentValue,value:Math.floor(Math.random() * (9 - 1 + 1)) + 1,isOn:false}
      })
    })
  }
  function handleResetButton(props){
    console.log("handle reset button working")
    setDieValues(prevValue => {
      return prevValue.map(currentValue => {
        return currentValue.isOn ? currentValue:{...currentValue, value:Math.floor(Math.random() * (9 - 1 + 1)) + 1}
      });
    });
  }
  function handleClick(id) {
    
    setDieValues(prevValue => {
      return prevValue.map(currentValue => {
        return currentValue.id === id ? {...currentValue, isOn:!currentValue.isOn}: currentValue
      });
    });
    
  }
  


  return (
    <div className="App">
      <div className="Information">
        <h1>Tenzies</h1>
        <h3>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h3>
      </div>
      
    <div className="DieArray">
      {dieValues.map(die_val => {
        return <Die value={die_val.value} id = {die_val.id} isOn={die_val.isOn} key={die_val.id} handleClick={handleClick} />;
      })}
    </div>
  
      <div className="ResetButton">
      <button onClick={handleResetButton}>Roll</button>
      </div>
    </div>
  );
}

export default App;
