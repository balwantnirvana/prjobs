import React, { useState, useEffect } from "react";
import BannerDashboard from "../banner/BannerDashboard";
import ProfileHeader from "./ProfileHeader";
import { ProfileImage } from "./ProfileImage";
import {useSelector } from 'react-redux';
import { EditProfile } from "../consultant/EditProfile";

export const ProfileConsultant = () => {
  
  const [isEdit, setIsEdit] = useState(false);
  const user = useSelector(state => state.users);
  let dataObj = {
    name: "",
    email: "",
    phone: "",
    company_name: "",
    company_email: "",
    company_address: "",
    city: "",
    province: "",
    post_code: "",
    country: "",
    company_phone: "",
    ircc_id: "",
    user_image_url:'',
  };
  const [values, seValues] = useState({...dataObj});
  
  const updateObj = () => {
    dataObj.name = user.profile.first_name + " " + user.profile.last_name;
    dataObj.email = user.profile.email;
    dataObj.phone = user.profile.phone;
    dataObj.company_name = user.profile.company_name;
    dataObj.company_email = user.profile.company_email;
    dataObj.company_address = user.profile.company_address;
    dataObj.city = user.profile.city;
    dataObj.province = user.profile.province;
    dataObj.post_code = user.profile.post_code;
    dataObj.country = user.profile.country;
    dataObj.company_phone = user.profile.company_phone;
    dataObj.ircc_id = user.profile.ircc_id;
    dataObj.user_image_url = user.profile.user_image_url;
    
    seValues({ ...dataObj });
  };

  useEffect(() => {
    if (user.profile) {
      updateObj();
    }
  }, [user.loading]);


  const {name, email, phone, company_name, company_email, company_address, city, province, post_code, country, company_phone, ircc_id, user_image_url} = values;


  const handleEdit = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };


  let styleEdit = {}  
  if(!isEdit){
    styleEdit.width = '100%'
  }

  if(user.loading){
    return null;
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
              <label>Company Name :</label>
            </div>
            <div className="box-in">{company_name}</div>
          </div>
          <div className="box">
            <div className="box-in">
              <label>Company Email :</label>
            </div>
            <div className="box-in">{company_email}</div>
          </div>
        </div>
      <div className="flex-field">
        <div className="box">
          <div className="box-in">
            <label>Company Address :</label>
          </div>
          <div className="box-in">{company_address}</div>
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
        <div className="box">
          <div className="box-in">
            <label>Province/State</label>
          </div>
          <div className="box-in">{province}</div>
        </div>
      </div>

      <div className="flex-field">
        <div className="box">
          <div className="box-in">
            <label>Country :</label>
          </div>
          <div className="box-in">{country}</div>
        </div>
        <div className="box">
          <div className="box-in">
            <label>Company Telephone :</label>
          </div>
          <div className="box-in">{company_phone}</div>
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
            <label>IRCC ID :</label>
          </div>
          <div className="box-in">{ircc_id}</div>
        </div>
      </div>
      </>
        ) }
    </div>
          </div>
        </div>
      </section> 
			    </>
  );
}

