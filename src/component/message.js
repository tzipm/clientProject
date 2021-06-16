import { connect } from "react-redux"

function Message(props){
    const {name="name" ,age="age" ,city="city",phone="phone",email="email"}= props.user
    return(
      <>
      
      <h1>My details</h1>
      <div>My name is {name} and I am {age} years old from {city}</div>
      <div>you can contact me at phone number {phone} or at email address {email}</div>
      </>  
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.users.currentUser
    }
}
export default connect(mapStateToProps)(Message)