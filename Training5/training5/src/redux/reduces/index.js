import {todoReducer} from './todo.reduce'
import { combineReducers } from 'redux'
import { authenReducer } from './authen.reduce'
import { userReducer } from './user.reduce'
const rootReducer = combineReducers({
    todoReducer,
    authenReducer,
    userReducer
})

export default rootReducer