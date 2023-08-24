import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [result,setresult]  =useState("");
  function handleclick(e){
    setresult(result.concat(e.target.name))
  }
  function clear () {
    setresult("");
  };

  function backslash(){
    setresult(result.slice(0, result.length - 1))
  }
  function calculate(){
  try{
    setresult(eval(result))
  }
  catch(err){
    setresult("error");
  }
  }
  return (
    <div className='container'>
      <form>
        <input type='text' value={result} />
      </form>
        <div className='keypad'>
        <button className='clear highlight' onClick={clear}>clear</button>
        <button className='highlight' onClick={backslash}>c</button>
        <button className='highlight' name='/' onClick={handleclick}>&divide;</button>
        <button name='7' onClick={handleclick}>7</button>
        <button name='8' onClick={handleclick}>8</button>
        <button name='9' onClick={handleclick}>9</button>
        <button className='highlight' name='*' onClick={handleclick}>&times;</button>
        <button name='4' onClick={handleclick}>4</button>
        <button name='5' onClick={handleclick}>5</button>
        <button name='6' onClick={handleclick}>6</button>
        <button className='highlight' name='-' onClick={handleclick}>&ndash;</button>
        <button name='1' onClick={handleclick}>1</button>
        <button name='2' onClick={handleclick}>2</button>
        <button name='3' onClick={handleclick}>3</button>
        <button className='highlight' name='+' onClick={handleclick}>+</button>
        <button name='0' onClick={handleclick}>0</button>
        <button className='highlight' name='.' onClick={handleclick}>.</button>
        <button  className='result highlight' name='=' onClick={calculate}>=</button>
        </div>
    </div>
  )
}

export default App
