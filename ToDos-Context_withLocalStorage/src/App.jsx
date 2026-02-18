import { useEffect, useState } from 'react'

import './App.css'
import { TodoContext, TodoProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  
  const [todos , setTodos] = useState([])  

  //??  ye todos : ek array hai jisme bhot saari values hain 

  const addTodo = (todo) => {     //? ye prev use krne se purana array mil gya ab naya array bana do
    setTodos( (prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  //? yahan uper see : samjho :
  /*  setTodos ko call kiya humne 
      usme humlog ne daala prev ek varaible kuch v naam rakho jo 
      purana value rajhe hua hoga array ka 
      then => usse ek naya array banaya humne jisme ...spread operator use kr ke purana array ka elemeyt 
      and new array ka element ko ek hi array mein rakh diya [...new , ...prev]
      but ye jo todo hai isko banana padega humkog 
      kyuki dekho context/TodoContext file mein humne Todo banaya hai ek array jisme ek object todo hai jiske pass id hai and all things 
      toh ab ek new todo banane ke liye usme humlog array banayengein and usme id v dalna hoga 
      toh unique id ke liye Date.now kr lengein and new todo ko array mein dalne ke liye {id:Date.now(), ...todo} and 
      ? ye jo kiya hai na {id:Date.now, ...todo}  bs sara liya ...todo se usme v id aya but usko bs overwrite kr diay humne aone se 
      */
      

  const updateTodo = (id , todo) => {
    setTodos( (prev) => prev.map( (prevTodo) => (
      prevTodo.id === id ? todo : prevTodo
    )) )
  }

  /* samjho :  

  hum isko pass kregein current (id,todo)  
  
  update todo mein:   humko pehle todos = [.....] mila jiske ander bhot sare todo hongein array mil gya 
  ab mujhe find krna hai //?konsa todo hai jo //? id se match kr raha hai taaki mein uske andr new todo add kr dun
  prev use kr ke previous array ki puri state li ab pura previous array aa gya
  array milte hi us pr loop laga diya map use kr ke 
  simple kaha loop mein har ke element pr jao previous array ke and uska //? id find kro 
  agar previous wale ka id match krta hai current id se agar match hua then ? "true wala kaam" : "false wala kaam"

  prev.map((eachVal) => {  here , eachval = prevTodo
    ? eachval yahan pr array ke ander each element hai jo ki array hai isliye we can do :::  eachval.id
    })
  
  
  */

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) =>
      todo.id !== id
    ))
  }

  /* filter har ke value ke pass jayega array ki
  ? yahan pr jo array diya hai usme se vo sab rehna chaiye jaisa hai bs ye id wala element nhi hona chaiye iskiye true/false wala case hai so we use filter
  ? toh jo element ka id !=== current id se vo nikal jayega
   */

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map( (prevTodo) =>
      prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
    ))
  }
  /*
  agar match kr jata jata true ho jati condition then
  ? baaki sab same rakho {...prevTodo , bs completed varaible ko  ko overwrite kr do usse pehle wale se ulta kr ke }
  */

  
  







  //* concepts of ---00000 [Local Storage] 00000------




  //? isme set value and get value hota hai bs 

  //? jo key values pair mein hota 

  //? and isme data dete time and lete time json mein encode decode krna padta hai

  //? means jab v local storage se kuch loge vo string dega convert krna padega json mein

  //? and jab doge toh string mei deni padti ahi value

  
  useEffect(()=>{
    
    const todos = JSON.parse(localStorage.getItem("todos"))   //? "todos" = "todosKey"

    if (todos && todos.length > 0 ){
      setTodos(todos)
    }

  },[])


  /* yahan pr samjho kya ho raha pehli baat item get kr rahe and us key ka naam todos hai
    ? ye kaam hai jab application load hui toh saario details apne aap aa gyi automatically local storage se le kr hum aagye 
  */



   //? ek aur kaam hai neeche jo kiya humne jaise saari data todos uper jo varaible hai useState se jo banaya hai humne usme agar  mein add ho => vo local storage mein v chali jaye  aisa krna hai dusre useEffect se
   //* means jaise TodoProvider => todos dega vo jayega Todos variable mein => and jaise todos varaible mein change ho hum usko daal dengein local storage mein

  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  //? "todosKey"  => key hai string form mein jop getItem time use hua tha
  //? JSON.stringify(todos)   => value hai jo us "todosKey" naam ke key mein jayega   string mein convert ho kr and yahan pr useState wala todos array convert hoga 

  

  /*
  ? set krte time local storage mein key value dono dena padta hai 
  ? and get krte time bs jis key se save kiye ho bs key ka naam do mil jayega value local straoge se string ki tarah jisko phir json mein convert kro 
  */





  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />

          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
              className='w-full'
              >
                 <TodoItem todo={todo} />
              </div>
            ) )}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
