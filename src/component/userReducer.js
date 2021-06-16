import produce from 'immer'
import createReducer from './reducerUtils'
const initialState = {
    users:[],
    currentUser:{}
}

const userFunction = {
    settUsers(state, action) {
        state.users = action.payload
    }, 
     addUser(state, action) { 
        state.users.push(action.payload)
        state.currentUser=action.payload
    },
}
const reducer = produce((state, action) => {
    createReducer(state, action, userFunction)
}, initialState)
export default reducer;

