import { createSlice, nanoid } from "@reduxjs/toolkit";

const newLocal = { id: 1, text: "hello my name is rajkrishna" };
export const todoSlice = createSlice({
    name: "todo",
    initialState: {todos: []},
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer