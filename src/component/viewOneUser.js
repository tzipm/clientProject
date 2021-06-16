import { connect } from "react-redux"

function ViewOneUser(props) {

    return (
        <>
            <ul>
                <li>Name: {props.user.name}</li>
                <li>Email:{props.user.email}</li>
            </ul>

        </>
    )

}
export default connect()(ViewOneUser)