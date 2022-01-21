import React, { useState, useEffect } from "react";
import BannerDashboard from "../banner/BannerDashboard";
import ProfileHeader from "../profile/ProfileHeader";
import { ProfileImage } from "../profile/ProfileImage";
import {useSelector } from 'react-redux';
import { EditProfile } from "./EditProfile";

export const ProfileJobseeker = () => {
    const [isEdit, setIsEdit] = useState(false);
    const user = useSelector(state => state.users);
    let dataObj = {
      nationality: "",  
      country: "",
      province: "",
      city: "",
      post_code: "",
      name: "",
      email: "",
      phone: "",
      date_of_birth: "",
      marital_status: "",
      ielts_certificate: "",
      canadian_education: "",
      skills:"",
      total_experience:'',
      education:'',
    };
    const [values, seValues] = useState({...dataObj});
    
    const updateObj = () => {
      dataObj.name = user.profile.first_name + " " + user.profile.last_name;
      dataObj.email = user.profile.email;
      dataObj.phone = user.profile.phone;
      dataObj.date_of_birth = (user.profile.date_of_birth !== null) ? user.profile.date_of_birth : '';
      dataObj.nationality = user.profile.nationality;
      dataObj.city = user.profile.city;
      dataObj.province = user.profile.province;
      dataObj.post_code = user.profile.post_code;
      dataObj.country = user.profile.country;
      dataObj.marital_status = user.profile.marital_status;
      dataObj.ielts_certificate = (user.profile.ielts_certificate !== false) ? 1 : 0;
      dataObj.canadian_education = (user.profile.canadian_education !== false) ? 1 : 0;
      dataObj.skills = user.profile.skills;
      dataObj.total_experience = user.profile.total_experience;
      dataObj.education = user.profile.education;
    
      seValues({ ...dataObj });
    };
  
    useEffect(() => {
      if (user.profile) {
        updateObj();
      }
    }, [user.loading]);
  
  
    const {
      nationality,
      country,
      city,
      province,
      post_code,
      name,
      email,
      phone,
      date_of_birth,
      marital_status,
      ielts_certificate,
      canadian_education,
      skills,
      total_experience,
      education
  
    } = values;
    
  
    const handleEdit = (e) => {
      e.preventDefault();
      setIsEdit(!isEdit);
    };
  
  
    let styleEdit = {}  
    if(!isEdit){
      styleEdit.width = '100%'
    }
  
    if(user.loading){
      //return null;
    }
    return (
      <>
        <BannerDashboard/>
        <ProfileHeader bc="true" title="My Profile"/>
  
        <section className="common-row lgray p-t0">
          <div className="tab-wrap-nav type-2">
            <div className="container">
              <div className="flex">
                <ul className="tab-type">
                  <li className="active">
                    <a href="#">PROFILE DETAILS</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="profile-wrap">
              { isEdit && <ProfileImage isEdit={isEdit}/>}
              
              <div className="profile-form dash-field" style={styleEdit}>
              <div className="flex-field edit-ifno">
                <div className="box">
                  <a onClick={handleEdit} className="btn xs-btn t-n">
                    Edit Info <i className="fa fa-pencil"></i>
                  </a>
                </div>
              </div>
          { isEdit ? <EditProfile setIsEdit={setIsEdit}/> : (    
            <>
          <div className="flex-field">
            <div className="box">
              <div className="box-in">
                <label>Nationality  :</label>
              </div>
              <div className="box-in">{nationality}</div>
            </div>
            <div className="box">
              <div className="box-in">
                <label>Country of residence at present :</label>
              </div>
              <div className="box-in">{country}</div>
            </div>
          </div>
        <div className="flex-field">
          <div className="box">
            <div className="box-in">
              <label>State/Province :</label>
            </div>
            <div className="box-in">{province}</div>
          </div>
          <div className="box">
            <div className="box-in">
              <label>City</label>
            </div>
            <div className="box-in">{city}</div>
          </div>
        </div>
        <div className="flex-field">
          <div className="box">
            <div className="box-in">
              <label>Zip Code :</label>
            </div>
            <div className="box-in">{post_code}</div>
          </div>
         
        </div>
  
       
        <div className="flex-field">
          <div className="box">
            <div className="box-in">
              <label>Your Name : </label>
            </div>
            <div className="box-in">{name}</div>
          </div>
          <div className="box">
            <div className="box-in">
              <label>Your Email : </label>
            </div>
            <div className="box-in">{email}</div>
          </div>
        </div>
        <div className="flex-field">
          <div className="box">
            <div className="box-in">
              <label>Your Number : </label>
            </div>
            <div className="box-in">{phone}</div>
          </div>
          <div className="box">
          <div className="box-in">
            <label>Marital Status :</label>
          </div>
          <div className="box-in">
            {marital_status}
          </div>
        </div>
        </div>

        <div className="flex-field">
          <div className="box">
            <div className="box-in">
              <label>Date of birth : </label>
            </div>
            <div className="box-in">{date_of_birth}</div>
          </div>
          <div className="box">
          <div className="box-in">
            <label>Education :</label>
          </div>
          <div className="box-in">
            {education}
          </div>
        </div>
        </div>
        <div className="flex-field">
          <div className="box">
            <div className="box-in">
              <label>IELTS certificate : </label>
            </div>
            <div className="box-in">{(ielts_certificate == 1) ? 'Yes' : 'No'}</div>
          </div>
          <div className="box">
          <div className="box-in">
            <label>Any Canadian education :</label>
          </div>
          <div className="box-in">
            {(canadian_education == 1) ? 'Yes' : 'No'}
          </div>
        </div>
        </div>
        <div className="flex-field">
          <div className="box">
            <div className="box-in">
              <label>Skills : </label>
            </div>
            <div className="box-in">{skills}</div>
          </div>
          <div className="box">
          <div className="box-in">
            <label>Total experience  :</label>
          </div>
          <div className="box-in">
            {total_experience}
          </div>
        </div>
        </div>
        </>
          ) }
      </div>
            </div>
          </div>
        </section> 
                  </>)
};
