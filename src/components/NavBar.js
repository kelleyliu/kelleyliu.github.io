import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import resume from '../docs/KelleyLiu_Resume.pdf';



function NavBar() {
    return (
        <Navbar bg="transparent" expand="lg">
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
                <Navbar className="ml-auto">
                    <Link className="nav-click-container" to="/">
                        <p className='navLink'>home</p>
                    </Link>
                    <Link className="nav-click-container" to="/about">
                        <p className='navLink'>about</p>
                    </Link>
                    <Link className="nav-click-container" to="/portfolio">
                        <p className='navLink'>portfolio</p>
                    </Link>
                    <a className='nav-click-container' target='_blank' href={resume}>
                        <p className='navLink'>resume</p>
                    </a>
                </Navbar>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;