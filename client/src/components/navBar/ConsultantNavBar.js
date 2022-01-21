import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import './ConsultantNavBar.css'
import {
    Navbar,
    Container,
    Nav,
    NavDropdown
} from 'react-bootstrap'

import {LinkContainer} from 'react-router-bootstrap'

import {BsBellFill} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'

export default function NavBar() {
    
    let history = useHistory()

    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', false)
        history.push('/')
        history.go(0)
    }

    return (
        <>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/consultant/dashboard">PR Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-nav ms-auto">
                    <Nav.Link><BsBellFill className="bsBellFill"/></Nav.Link>

                    <NavDropdown title="Settings">
                        <LinkContainer to="/consultant/profile">
                            <NavDropdown.Item>My Profile</NavDropdown.Item>
                        </LinkContainer>
                    
                        <LinkContainer to="/">
                            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </Nav>
                
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}