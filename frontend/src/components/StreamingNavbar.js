import { Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

export default function StreamingNavbar() {
    return (<div>
        <Navbar bg="primary" variant="primary" className="px-3 py-0">
            <Navbar.Brand><NavLink className="text-light nav-link" to="/">DEMO Streaming</NavLink></Navbar.Brand>
            <Navbar.Collapse className="d-flex justify-content-end">
                <NavLink className="text-light nav-link" to="/Login">Log in</NavLink>
                <NavLink className="btn btn-dark rounded-0" variant="dark" to="/Trial">Start your free trial</NavLink>
            </Navbar.Collapse>
        </Navbar>
    </div>
    )
}