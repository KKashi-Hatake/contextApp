import React, { useState } from "react";
import { useCount } from "../context";

const Counter = () => {
  const [inputText,setInputText]=useState(5)
    const {add, remove, count} = useCount();
    const addHandler = (e) => {
        e.preventDefault();
        add(inputText)
        
      };
    
      const removeHandler = (e) => {
        e.preventDefault();
        remove(inputText)
        console.log(count)
      };
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1704634134420-55d2e632c3a3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center h-screen flex justify-center items-center">
      <input className="bg-gray-400 p-2 rounded-sm text-center w-20 outline-none" type="number" value={inputText} onChange={(e)=>setInputText(e.target.value)} />
      <div className="w-60 text-blue-950 flex justify-around">
        <button
          onClick={addHandler}
          type="button"
          className="border-2 border-gray-400 w-9 h-8 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
        >
          +
        </button>
        <p>Count : {count}</p>
        <button
          onClick={removeHandler}
          type="button"
          className="border-2 border-gray-400 w-9 h-8 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
