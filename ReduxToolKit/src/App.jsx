import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1>Learn Redux Tool kit</h1>
      <h2>Redux Tool Kit is used as Context API</h2>
      <h6>This is h6 heading </h6>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App



//? change can we done by reducers
