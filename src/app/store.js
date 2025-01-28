import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../feature/Todo/TodoSice'
 
 export const store = configureStore({
    reducer : todoReducer
})