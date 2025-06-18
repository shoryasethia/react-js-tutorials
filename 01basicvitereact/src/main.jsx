import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

// First letter should be CAPITAL
function MyApp(){
  return(
    <h1>Hello world from MyApp function in main.jsx</h1>
  )
}

// This won't work because React doesn't understand what is type, props, children.
// This is custom declaration
// const ReactElement = {
//   type: 'a',
//   props:{
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }


// This works fine
// const anotherElement = (
//   <a href="https://google.com" target='_blank'> Visit Google </a>
// )

// So there is a fixed format to create an element in react.
// This works fine
// const reactElement = React.createElement(
//   'a',
//   {
//     href: "https://google.com",
//     target:"_blank",
//   },
//   "Click me to visit Google",
// )

createRoot(document.getElementById('root')).render(
  <MyApp /> //App is a function
  // App() will also work, but for optimizations use <App />
)