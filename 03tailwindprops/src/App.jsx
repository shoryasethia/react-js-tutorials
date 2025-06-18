/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App(){
  return(
    <>
      <Card username="Shorya Sethia" email="shorya.sethia@iitb.ac.in" ph="+91 7023456789" clg="IIT Bombay"/>
      <Card username="Mr Bean" email="mail@exmaple.com" ph="+91 7023456789" clg="MIT"/>
      <Card username="Mrs Bean" email="mail@exmaple.com" ph="+91 7023456789" clg="MIT"/>
    </>
  )
}

export default App
