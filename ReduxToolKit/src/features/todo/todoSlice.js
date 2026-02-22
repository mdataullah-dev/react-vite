import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos : [{id:1 , text:"Hello World"}]
}

//? reducer ke nader aata hai property and methods

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=>{
                todo.id !== action.payload  
            })
        },

    }
})

//? addTodo & removetodo are => 2 reducers


export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer


//? state and action milta hai :

//? state => current state milta hai jo v state hai 

//? action => jio v data pass lrengein hum jo hum action lengein : ji v data pass krengein