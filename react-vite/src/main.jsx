import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>

)

const anotherUser = "BISWA"
const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  'click me to visit google ',
  anotherUser
)

createRoot(document.getElementById('root')).render(
    <App />    //? jab function ko krna hoga usko < iske ander dalna hoga/>
    //reactElement  //? jab object ko render krna hoga direct krengein
)



