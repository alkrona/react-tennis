import { useState,useEffect } from "react";
import Die from "./components/Die";

import Conf from "./components/Confet";
import dies from "./components/dies";
function App() {
  const [ wonGame,setWonGame]= useState(false)
  const [dieValues, setDieValues] = useState(dies)
  function resetAll(){
    setDieValues(prevValue=>{
      return prevValue.map(currentValue=>{
        return {...currentValue,value:Math.floor(Math.random() * (9 - 1 + 1)) + 1,isOn:false}
      })
    })
    setWonGame(false)
  }
  function handleResetButton(props){
    console.log("handle reset button working")
    setDieValues(prevValue => {
      return prevValue.map(currentValue => {
        return currentValue.isOn ? currentValue:{...currentValue, value:Math.floor(Math.random() * (9 - 1 + 1)) + 1}
      });
    });
    const potential_winner = dieValues[0].value
    let is_winner = false
    for (let i =0;i<dieValues.length;i++){
      if(dieValues[i].value !== potential_winner ){
        is_winner=true
        break;
      }
    }
    if(!is_winner){
      console.log("game won")
      setWonGame(true)
    }
  }
  function handleClick(id) {
    
    setDieValues(prevValue => {
      return prevValue.map(currentValue => {
        return currentValue.id === id ? {...currentValue, isOn:!currentValue.isOn}: currentValue
      });
    });
    
  }
  useEffect(()=>{
    resetAll();
  },[]);


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
      {wonGame?<button onClick={resetAll}>Reset</button>:<button onClick={handleResetButton}>Roll</button>}
      {wonGame&& <Conf/>}
      </div>
    </div>
  );
}

export default App;
