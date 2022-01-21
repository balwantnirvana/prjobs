import React from 'react';
import mapIconW from '../../../img/map-icon.png'
import ti from '../../../img/truck-icon.png'
import OwlCarousel from 'react-owl-carousel'
import BannerDashboard from '../banner/BannerDashboard';
import ProfileHeader from '../profile/ProfileHeader';
export const ConsultantDashboard = () => {
    const options = {
        margin: 15,
        responsiveClass: true,
        nav: true,
        autoplay: false,
        navText: ["Prev", "Next"],
        smartSpeed: 1000,
        dots:false,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 3,
            }
        },
      };

  return <>
  <BannerDashboard />
   <ProfileHeader bc="false" title="" />
  <section className="common-row lgray p-t0">
  <div className="tab-wrap-nav type-2">
    <div className="container">
      <div className="flex">
        <ul className="tab-type">
          <li className="active"><a href="#">ALL EMPLOYERS</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="container">

  <OwlCarousel className='dash-3-slider owl-carousel img-arrow' {...options}>

      <div className="common-box"> <span className="count">01</span> <i className="icon"><img src={ti} alt="" /></i>
        <h3>KPM Automotives</h3>
        <p>Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco. </p>
        <p className="map-icon">33 Sage Valley Cir NW Calgary <img src={mapIconW} /></p>
        <a href="#" className="box-btn">Edit Info <i className="fa fa-pencil"></i></a> </div>

      <div className="common-box blue"> <span className="count">02</span> <i className="icon"><img src={ti} alt="" /></i>
        <h3>Indian Curry House</h3>
        <p>Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco. </p>
        <p className="map-icon">33 Sage Valley Cir NW Calgary <img src={mapIconW} /></p>
        <a href="#" className="box-btn">Edit Info <i className="fa fa-pencil"></i></a> </div>

      <div className="common-box"> <span className="count">03</span> <i className="icon"><img src={ti} alt="" /></i>
        <h3>Lake View Hotels</h3>
        <p>Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco. </p>
        <p className="map-icon">33 Sage Valley Cir NW Calgary <img src={mapIconW} /></p>
        <a href="#" className="box-btn">Edit Info <i className="fa fa-pencil"></i></a> </div>

      <div className="common-box blue"> <span className="count">04</span> <i className="icon"><img src={ti} alt="" /></i>
        <h3>Lake View Hotels</h3>
        <p>Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco. </p>
        <p className="map-icon">33 Sage Valley Cir NW Calgary <img src={mapIconW} /></p>
        <a href="#" className="box-btn">Edit Info <i className="fa fa-pencil"></i></a> </div>
        
  
  </OwlCarousel>
  </div>
</section>
  
  
  </>;
};
