import users from './userReducer'
import {addUser,getUsers} from './middleWares/crud'

import { applyMiddleware, combineReducers, createStore } from "redux";

const reducer = combineReducers({ users })


const store = createStore(reducer,applyMiddleware(addUser,getUsers))
window.store = store;
export default store;