import React, { useEffect } from "react";
import { useState } from "react";



function Calcu (){

const[result,setResult] =useState("")   

const handleClick=(e)=>{
  // console.log(e.target.innerText)
  setResult(result.concat(e.target.innerText));
}

const handleDelete=(e)=>{
  setResult("")
}

const handleResult=(e)=>{
  setResult(eval(result))
}

const handleErase = (e)=>{
  setResult(result.slice(0,-1))
}


return(
    <>
    <section className="middle position">
      <div className="bar">
        <h2>{result}</h2>
    </div>
      <div className="top flex">
        <div className="calc-btn btn" onClick={handleClick}>+</div>
        <div className="calc-btn btn" onClick={handleClick}>-</div>
        <div className="calc-btn btn" onClick={handleClick}>*</div>
        <div className="calc-btn btn" onClick={handleClick}>/</div>
      </div>
      <div className="top flex">
        <div className="calc-btn1 btn" onClick={handleClick}>7</div>
        <div className="calc-btn1 btn" onClick={handleClick}>8</div>
        <div className="calc-btn1 btn" onClick={handleClick}>9</div>
         </div>
         <div className="top flex">
          <div className="calc-btn2 btn" onClick={handleClick}>4</div>
          <div className="calc-btn2 btn" onClick={handleClick}>5</div>
          <div className="calc-btn2 btn" onClick={handleClick}>6</div>
           </div>
           <div className="top flex">
            <div clasNames="calc-btn2 btn" onClick={handleClick}>1</div>
            <div className="calc-btn2 btn" onClick={handleClick}>2</div>
            <div className="calc-btn2 btn" onClick={handleClick}>3</div>
            <div className="calc-btn2 btn" onClick={handleErase}>back</div>
             </div>
             <div className="top flex">
              <div className="calc-btn2 btn" onClick={handleClick}>.</div>
              <div className="calc-btn2 btn" onClick={handleClick}>0</div>
              <div className="calc-btn2 clear" onClick={handleDelete}>c</div>
               </div>
               <div className="result" onClick={handleResult}>=</div>
    </section>
    </>
)
}


export default Calcu;