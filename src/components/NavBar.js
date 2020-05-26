import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function NavBar() {
    return (
        <Navbar bg="transparent" expand="lg">
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
                <Navbar className="ml-auto">
                    <Link className="customLink nav-link lead" to="/">Home</Link>
                    <Link className="customLink nav-link lead" to="/about">About</Link>
                    <Link className="customLink nav-link lead" to="/portfolio">Portfolio</Link>
                </Navbar>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;