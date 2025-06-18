/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // useState(true) //(false), (''), anything can be given
  let [counter, setCounter] = useState(10)

  // let counter = 5
  
  const addValue = () => {
    // console.log("addValue clicked", counter)
    // counter = counter + 1
    if(counter==20){
      alert("Maximum value reached")
    }
    else setCounter(counter+1)
  }

  const removeValue = () => {
    // console.log("removeValue clicked", Math.random())
    // counter = counter - 1
    if(counter==0){
      alert("Minimum value reached")
    }
    else setCounter(counter-1)
  }
  
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      
      <button onClick = {addValue}>Add value</button>
      <br />
      <button onClick = {removeValue}>Remove value</button>
    </>
  )
}

export default App
