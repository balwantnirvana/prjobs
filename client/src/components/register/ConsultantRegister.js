import React, { useState } from 'react';
import '../../App.css';
import ApiHandler from '../../apiHandler';
import { resolve } from 'url';
import { rejects } from 'assert';

export default function ConsultantRegister() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [email, setEmail] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [consultantList, setConsultantList] = useState([]);
    // const [employerAuthorization, setEmployerAuthorization] = useState("");
    // const [employerId, setEmployerId] = useState("");

    //Add new consultant
    // Steps: add new user to db, retrieve user id by email
    const addConsultant = () => {
      var newUser = {
        name: name,
        username: username,
        email: email,
        password: password,
        contactNumber: contactNumber
      }

      var newConsultant = {
        companyName: companyName,
        email: email,
        contactNumber: contactNumber
        // employerAuthorization: employerAuthorization,
        // employerId: employerId
      }
      try {
        addNewUser(newUser).then((response) => {
          console.log("The response is" , response.message)
        }).catch(response => console.log("The error is", response))
        
        addNewConsultant(newConsultant).then((response) => {
          console.log("New Consultant", response.message)
        })
          .then(() => {
            console.log(newConsultant.email)
            retrieveUserIdByEmail(newConsultant.email).then((response) => {
              console.log("Email: ", response.data[0].id)
              alert("Profile Created Successfully")
              localStorage.setItem("consultantInfo", response.data[0]);
              localStorage.setItem("name", newUser.name);
              window.location.replace('/dashboard');
            }).catch(response => console.log("The error is", response))
          })
        .catch(response => console.log("The error is", response))
        
      } catch(e) {
        alert("Cannot create new user")
        console.log(e)
      }
    }
    //Add new user to the database
    async function addNewUser(user) {
      let response = await ApiHandler.addNewUser(user)
      if (response == null){
        return Promise.reject("Cannot add new user")
      }
      else {
        return Promise.resolve(response)
      }
    }

    //Add new user to the database
    async function retrieveUserIdByEmail(email) {
      let response = await ApiHandler.retrieveAConsultantIdByEmail(email)
      if (response == null){
        return Promise.reject("Cannot retrieve user info by email")
      }
      else {
        return Promise.resolve(response)
      }
      
    }

    //Add new consultant to the database
    async function addNewConsultant(consultant) {
      let response = await ApiHandler.addNewConsultant(consultant)
      if (response == null){
        return Promise.reject("Cannot add new consultant")
      }
      else {
        return Promise.resolve(response)
      }
      
    }
  
    const getAllConsultants = async () => {
      var response = await ApiHandler.retrieveAllConsultants()
      console.log(response)
      if (response === null){
        console.log("Cannot get consultants")
      }
      else {
        setConsultantList(response)
      }
    }
  
    return (
      <div className="App">
        <div className="userInfo">
          <h1>Consultant Registering Page</h1>
          <h2>Set Profile Up</h2>
          <label>Name</label>
          <input type="text" onChange={(event)=> setName(event.target.value)}/>
          <label>Company Name</label>
          <input type="text" onChange={(event)=> setCompanyName(event.target.value)}/>
          <label>Email</label>
          <input type="text" onChange={(event)=> setEmail(event.target.value)}/>
          <label>Contact Number</label>
          <input type="text" onChange={(event)=> setContactNumber(event.target.value)}/>
          <h2>Next, create login profile</h2>
          <label>Username</label>
          <input type="text" onChange={(event)=> setUsername(event.target.value)}/>
          <label>Password</label>
          <input type="text" onChange={(event)=> setPassword(event.target.value)}/>
          <button onClick={addConsultant}>Sign Up</button>
          <hr/>
          {/* <h1>All Consultants</h1>
          <button onClick={getAllConsultants}>Show All Consultants</button>
            {consultantList.map((key, val) => {
              return (
              <div className="consultant">
                <h3>Name: {key.name}</h3>
                <h3>Company Name: {key.companyName}</h3>
                <h3>Email: {key.email}</h3>
                <h3>Contact Number: {key.contactNumber}</h3>
              </div>
              );
            })} */}
        </div>
      </div>
    );
}