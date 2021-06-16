import { connect } from "react-redux"
import { useEffect } from 'react'
import ViewOneUser from './viewOneUser'
import actions from './actions'
function AllUsers(props) {
useEffect(() => {
    props.getAllUsers()
}, [])
const renderUser = () => {
    return props.allUsers && props.allUsers.map((user) => {
        return <ViewOneUser  user={user}></ViewOneUser>
    })
}
    return (
        <>
            {renderUser()}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        
        allUsers: state.users.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers: () => dispatch(actions.setUsers())
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(AllUsers)