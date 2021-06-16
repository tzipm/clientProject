import { Link } from 'react-router-dom'

export default function Menue() {
    return (

        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <li class="navbar-brand"><Link to="/form">form</Link></li>
                <li class="navbar-brand"><Link to="/message">message</Link></li>
                <li class="navbar-brand"><Link to="/allUsers">show all users</Link></li>
            </nav>
        </>

    )
}