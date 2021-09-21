import {todoReducer} from './todo.reduce'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    todoReducer
})

export default rootReducer