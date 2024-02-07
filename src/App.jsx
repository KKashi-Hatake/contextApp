import React,{useState} from "react";
import { CountProvider } from "./context/index";
import Counter from "./components/Counter";

function App() {
const [count, setCount]= useState(5)
const add=(val)=>{
  val=parseInt (val)
  setCount(prev=>prev+val)
}
const remove=(val)=>{
  val=parseInt (val)
  setCount(prev=>prev-val)
}
  return (
    <CountProvider value={{ count, add, remove }}>
      <Counter/>
    </CountProvider>
  );
}

export default App;
