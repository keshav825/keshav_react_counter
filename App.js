import "./App.css";
import { useState } from "react";

function App() {
  const [count,setCount]=useState(0);

  function drecreasehandler(){
   setCount(count-1);
  }
  function increasehandler(){
    setCount(count+1);
  }
  function resethandler(){
    setCount(0);
  }
  return (
   <div className="w-[100vw] h-[100vh] flex justify-center bg-[#344151] flex-col gap-10 items-center">
    <div className="text-[#0398d4] font-medium text-2xl">Increament && Decreament</div>
    <div className=" bg-[white]  flex justify-center gap-12 py-3 rounded-sm text-[25px] bg-[#344151]">
      <button onClick={drecreasehandler} className=" border-r-2 text-center text-5xl w-20 border-[#bfbfbf]">-</button>
      <div className="font-bold gap-12 text-5xl">
        {count}
      </div>
      <button onClick={increasehandler} className=" border-r-2 text-center text-5xl w-20 border-[#bfbfbf]">+</button>
      
    </div>
    <button onClick={resethandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm">reset</button>
   </div>
  );
}

export default App;
