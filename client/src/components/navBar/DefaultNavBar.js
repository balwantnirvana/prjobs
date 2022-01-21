import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import {
    Navbar,
    Container,
    Nav,
    NavDropdown
} from 'react-bootstrap'

import {LinkContainer} from 'react-router-bootstrap'

export default function NavBar({
    showRegister, 
    showLogin, 
    showLogout}) {
    const [showRegisterNav, setShowRegisterNav] = useState(showRegister)
    const [showLoginNav, setShowLoginNav] = useState(showLogin)
    const [showLogoutNav, setShowLogoutNav] = useState(showLogout)
    let history = useHistory()

    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', false)
        history.push("/login/consultant")
        setShowRegisterNav('true')
        setShowLoginNav('true')
        setShowLogoutNav('none')
    }

    return (
        <>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">PR Jobs</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <NavDropdown style={{display: showRegisterNav}} title="Register" id="navbarScrollingDropdown">
                {/* <Link to="/register/consultant">Consultant Register</Link> */}
                    <LinkContainer to="/register/consultant">
                        <NavDropdown.Item>Consultant</NavDropdown.Item>
                    </LinkContainer>
                    
                    <LinkContainer to="/register/job-seeker">
                        <NavDropdown.Item>Job Seeker</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>

                <NavDropdown style={{display: showLoginNav}} title="Login" id="navbarScrollingDropdown">
                {/* <Link to="/register/consultant">Consultant Register</Link> */}
                    <LinkContainer to="/login/consultant">
                        <NavDropdown.Item>Consultant</NavDropdown.Item>
                    </LinkContainer>
                    
                    <LinkContainer to="/login/job-seeker">
                        <NavDropdown.Item>Job Seeker</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
                <Nav.Link style={{display: showLogoutNav}} onClick={handleLogout}>Logout</Nav.Link>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}