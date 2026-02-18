import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
           id:1,
           todo: "Todo MSG",
           completed: false,
        }
        // , {} , {}
        
    ],
    // , theme : "dark"
    addTodo: (todo) => {},     //? isme hum todo means ek msg jo uoer hai pass karengein then ye function luch kaam krega 
                               //? kya kaam karega ye hum decide krenhein app.jsx mein
    updateTodo: (id, todo) => {},     //? jo UI mein list rahega vo dekho wahan pr edit ka option rahega => usme change krun toh sahi waka ho uske liye id lagega
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})


//? contextApi mein function jo banate hum yahan pr uska bs naam likhte hain
//? defination yahan pr nhi likhte hain defination wahan app.jsx mein dengein jab neend ayega iska



export const useTodo = () => {
    return useContext(TodoContext)
}
//? useContext ko ek context chaiye hota hai 
//? means use context lengein tab ek context dena padega isko -------> ki hum kis context ke baare mein baat kr rahein hain
//? like ki hum login ke baare mein todo ke baare mein kya context hai hamarasa


export const TodoProvider = TodoContext.Provider