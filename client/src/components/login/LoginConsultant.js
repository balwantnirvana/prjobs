import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Loginimg from '../../img/set-profile-img.png'
import LoginApiHandler from '../apiHandler/LoginApiHandler'

export default function LoginConsultant(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginMessage, setLoginMessage] = useState('')
    let history = useHistory()
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const user = {
                username: username,
                password: password
            }
            var response = await LoginApiHandler.loginConsultant(user)
            if (response.status === 200){
                localStorage.setItem("token", response.data.data.token) 
                localStorage.setItem("isLoggedIn", true)
                history.push("/consultant/dashboard")
                history.go(0)
            }
            else {
                setLoginMessage('Invalid credentials')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
        <div id="loginForm" className="common-popup mfp-hide">
            <div className="popup-content">
                <h3>Login</h3>
                <div className="row set-profile-p">
                <div className="col-sm-6"> <img src={Loginimg} alt="" /> </div>
                <div className="col-sm-6">
                    <div className="form-field row">
                    <div className="col-sm-12">
                        <label>Email</label>
                        <input type="email" name="email" onChange={(event)=> setUsername(event.target.value)} />
                    </div>
                    <div className="col-sm-12">
                        <label>Password</label>
                        <input type="password" name="password" onChange={(event)=> setPassword(event.target.value)} />
                    </div>
                    <div className="col-sm-12">
                        <button className="btn m-t1" onClick={handleSubmit}>Login</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}