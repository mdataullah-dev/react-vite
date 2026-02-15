import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Own from './Own.jsx'



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>MD ATAULLAH MASOOD</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
// function App(){

//   const userName = "Injection of variable in jsx"
//   return(
//     <>
//     <Own/>
//     <h1>learning {userName}</h1>    
//     <h2>react with ataullah buddy</h2>
//     <p>Test with buddy</p>
//     </>
//   )
// }

function App(){



  //let counter = 0 //? let isliye why? => change krni hai iski value aage

  const [ initial , setval] = useState(100)    //? here setval is function

  //!  [ a , b ]  => a : varibale && b : function

  let [counter, setCount]  = useState(0)
  
  const addValue = () => {
    //console.log("value added", counter);

    counter = counter + 1;

    if(counter>=20 ){
      counter = 20
    }
  
    setCount(counter)
  
  
  }

  const remValue = () =>{
    //console.log(`value removed ${counter}`)
    counter = counter - 1
    if(counter <=0){
      counter = 0
    }
    setCount(counter)
  }
  
  return(
    <>
    <h1> Md Ataullah and React</h1>
    <h2>Counter Value: {counter}</h2>

    <button
    onClick={addValue}>Add Value {counter}</button>

    <br />

    <button
    onClick={remValue}>Remove Value {counter}</button>

    { /* <button onClick={() => setval((initial) => initial + 2)}> Number is {initial}</button> */ }

    <button onClick={() => setval((initial) => {
      if(initial>=110){
      return 0
    }
      return initial +2} 
      )}>
      Number is {initial}
    </button>

    <p>Footer: {counter}</p>
    </>

  )
}
export default App
