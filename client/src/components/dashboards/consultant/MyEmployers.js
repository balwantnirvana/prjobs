import React, { useState, useEffect } from "react";
import BannerDashboard from "../banner/BannerDashboard";
import ProfileHeader from "../profile/ProfileHeader";
import truck from "../../../img/truck-icon.png";
import food from "../../../img/food-icon.png";
import pin from "../../../img/w-map.png";
import { Link } from "react-router-dom";
import { employerActions } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../../helpers";

const MyEmployers = () => {
  const data = useSelector((state) => state.employerDetail);
  const [values, setValues] = useState([]);
  const dispatch = useDispatch();

  const fetchEmployer = async () => {
    let user = currentUser();
    if (user.id) {
      console.log(user.id);
        dispatch(employerActions.getAll(user.id)).then((data) => {
        setValues([...data.payload]);
      });
    }
  };
  useEffect(() => {
    fetchEmployer();
  }, [dispatch]);

  return (
    <>
      <BannerDashboard />
      <ProfileHeader bc="true" title="My Employers" />
      <section className="common-row lgray p-t0">
        <div className="tab-wrap-nav type-2">
          <div className="container">
            <div className="flex">
              <ul className="tab-type">
                <li className="active">
                  <a href="#">ALL EMPLOYERS</a>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col-3-common flex-wrap">
            {values && values.map((item, index) => (
              <div className="common-box" key={index}>
                
                <span className="count">{index + 1}</span>
                <i className="icon">
                  <img src={truck} alt="" />
                </i>
                <h3>{item.business_name}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <p className="map-icon">
                  {item.business_address} <img src={pin} />
                </p>
                <a href={`edit-employer/${item.id}`} className="box-btn">
                  Edit Info <i className="fa fa-pencil"></i>
                </a>
                {/* <Link to={`edit-employer/${item.id}`} className="box-btn">Edit Info <i className="fa fa-pencil"></i></Link> */}
              </div>
            ))}

            {/* <div className="common-box blue"> <span className="count">02</span> <i className="icon"><img src={food} alt="" /></i>
        <h3>Indian Curry House</h3>
        <p>Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco. </p>
        <p className="map-icon">33 Sage Valley Cir NW Calgary <img src={pin} /></p>
        <a href="#" className="box-btn">Edit Info <i className="fa fa-pencil"></i></a> </div> */}
          </div>
          <p className="add-employer-row">
            <Link to="/add-employer" className="btn md-btn">
              {" "}
              Add Employer<i className="fa fa-plus-circle"></i>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default MyEmployers;
