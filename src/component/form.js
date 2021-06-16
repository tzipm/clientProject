import React, { useState } from "react"
import { connect } from 'react-redux'
import actions from './actions'

function Form(props) {
    const [user, setUser] = useState({});

    const handleInputChange = (e) => {
        user[e.target.name] = e.target.value;
        user.admin = user.admin ? true : false
        setUser(user);
    }
    const createUser = (e) => {
        e.preventDefault();
        props.createNewUser(user)
    }
    return (
        <>
            <form class="form-group" onSubmit={createUser}>
                <div class="form-group">
                    <label>Full name</label>
                    <input required={true} name="name" onChange={handleInputChange}></input>
                </div>
                <div class="form-group">
                    <label>City</label>
                    <input required={true} name="city" onChange={handleInputChange}></input>
                </div>
                <div class="form-group">
                    <label>Age</label>
                    <input required={true} name="age" onChange={handleInputChange}></input>
                </div>
                <div class="form-group">
                    <label>City adress</label>
                    <input required={true} name="name" onChange={handleInputChange}></input>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input required={true} name="email" type="email" onChange={handleInputChange}></input>
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input required={true} name="phone" onChange={handleInputChange}></input>
                </div>


                <input type="submit"></input>
            </form>
        </>
    )
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createNewUser: (user) => dispatch(actions.addUser(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)

