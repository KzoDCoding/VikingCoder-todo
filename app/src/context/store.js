import React, {createContext, useReducer} from 'react';
import { ADD_TASK, TOGGLE_COMPLETED, CLEAR_COMPLETED, CLEAR_ALL } from "./actions"
import todoReducer from './reducer';

export const TodoContext = createContext();

const TodoProvider = (props) => {

    const initialState = [
        {
            id: 538498416215,
            taskName: 'refactor for the useReducer hook',
            completed: false
        }
    ]
    const [todoList, setDispatch] = useReducer(todoReducer, initialState);

    const addTask = (task)  => {
        setDispatch({
            type: ADD_TASK,
            payload: {taskName: task}
        })
    }

    const toggleCompleted = (clickedItemId) => {
            setDispatch({
                type: TOGGLE_COMPLETED,
                payload: clickedItemId
            })
    }

    const clearCompleted = () => {
        const clearSelected = todoList.filter(task => task.completed !== true);
        setDispatch({
            type: CLEAR_COMPLETED,
            payload: clearSelected
        });
      }

    const clearAll = () => {setDispatch({type: CLEAR_ALL,payload: []});}

    return (
        <TodoContext.Provider
        value={
            {
                addTask,
                todoList, 
                setDispatch,
                toggleCompleted,
                clearCompleted,
                clearAll
            }
        }>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;