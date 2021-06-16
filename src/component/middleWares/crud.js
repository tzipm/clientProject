import { Redirect } from "react-router"
import actions from "../actions"

export const getUsers = ({ dispatch, getState }) => next => action => {

    if (action.type === 'SET_USERS') {

        fetch('http://localhost:8000/getAllUsers', {
            method: 'POST',
        }).then((response) => {
            return response.json()
        }).then((result) => {
            dispatch(actions.settUsers(result.users))
            // action.payload = result.users;
        }).catch((error) => {
            console.log(error);
        })
    }
    return next(action);
}

export const addUser = ({ dispatch, getState }) => next => action => {
    if (action.type === 'ADD_USER') {
        fetch('http://localhost:8000/createUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(action.payload)
        }).then(function (response) {
            return response.json()
        }).then(function (result) {
            console.log(result)
            action.payload = result.user;
            alert("user saved")
        }).catch((error) => {
            console.log(error);
            alert("failed to save")
        });

    }
    return next(action);
}

export const deleteTask = ({ dispatch, getState }) => next => action => {
    if (action.type === 'DELETE_TASK') {
        fetch(`http://localhost:9000/deleteTask/${action.payload}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        })
            .then(function (response) {
                return response.json()
            }).then(function (result) {
                dispatch(actions.deleteTask(result.deletedTask))
            }).catch((error) => {
                console.log(error);
            });
    }
    return next(action);
}


// export const addUser=({dispatch,getState})=>next=>action=>{
//     if(action.type==='ADD_USER'){
//         debugger
//      fetch('http://localhost:8000/users/createUser', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(action.payload)
//     }).then(function (response) {
//             return response
//         }).then(function (result) {
//             console.log(result)
//             action.payload = result.user;
//             // return next(action);
//             // dispatch(actions.addTask(result.task))
//             return <Redirect to={{pathname:'/contactUs'}}></Redirect>
//         }).catch((error)=>{
//             return <Redirect to={{pathname:'/contactUs',state1:{mess:'אין אפשרות ליצור יוזר'}}}></Redirect>
//         });

//     }
//     return next(action);
// }
