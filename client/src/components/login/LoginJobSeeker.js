import React, {useState} from 'react'
import {
    Col, 
    Form, 
    Button, 
    Row,
    Container
} from 'react-bootstrap'

import {FaRegUserCircle} from 'react-icons/fa'
import LoginSvg from '../../img/loginJobSeeker.svg'
import './Login.css'

export default function LoginJobSeeker(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return(
        <>
        <Container className="mt-5">
            <Row>
                <Col lg={4} md={12} sm={12} className="text-center mt-5 p-3">
                    <FaRegUserCircle className="user-icon"/>
                    <h2>Job Seeker Login</h2>
                    <br/>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="email" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                    
                    <Button className="btn btn-primary btn-block" type="submit">Login</Button>
                </Form>
                </Col>
                <Col lg={6} md={12} sm={12}>
                    <img 
                    style={{marginLeft: '7rem'}}
                    className="w-100 " src={LoginSvg} alt="login"/>
                </Col>
            </Row>
        </Container>
        </>
    )
}