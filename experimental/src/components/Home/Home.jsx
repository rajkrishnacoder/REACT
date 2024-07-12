import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import {addTodo} from "../../features/todo/todoSlice"


function Home() {
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
      dispatch(addTodo("my name is rajkrishna debnath"))  
    }, [])
    
    const state = useSelector(state => state.todos)

    return (
        <div>
            <h1>hello this is home page</h1>
            <p>{state[0]?.text}</p>
        </div>
    );
}

export default Home;