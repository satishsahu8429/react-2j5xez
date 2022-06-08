import React,{useState} from "react";
//import React from "react";
// usestate => usestate is a Hook which is used
//to manage states of react .
// work on event function set / reset function using event
import "./style.css";

export default function App() {
  let [test,setTest]=useState(0)
  // test is a state variable
  //set-states is a function which will manage my values of state variable
  //usestate('') => default values of your state variable.
  // action ,Onchange

  function increment(){
    setTest(test+1)
  }
  function decrement(){
    setTest(test-1)
  }
  return(
    <div>
      <button onClick={increment}>+</button>
      <div>{test} this is your state of variable value can be cange !</div>
      <button onClick={decrement}>-</button>
      </div>
  );
}
