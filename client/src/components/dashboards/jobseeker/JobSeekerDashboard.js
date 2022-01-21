import React from 'react';
import BannerDashboard from '../banner/BannerDashboard';
import ProfileHeader from '../profile/ProfileHeader';

export const JobSeekerDashboard = () => {
  return<>
  <BannerDashboard/>
  <ProfileHeader bc="false" title="" />
  <section class="common-row lgray p-t0">
  <div class="tab-wrap-nav type-2">
    <div class="container">
      <div class="flex">
        <ul class="tab-type">
          <li class="active"><a href="#">Dashboard</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="col-3-common flex-wrap">
      <div class="common-box type-2"> <span class="count">05</span> <i class="icon"><img src="img/jobseeker-icon-1.png" alt=""/></i>
        <h3>Applied Jobs</h3>
      </div>
      <div class="common-box type-2 blue"> <span class="count">02</span> <i class="icon"><img src="img/jobseeker-icon-2.png" alt=""/></i>
        <h3>Review</h3>
      </div>
      <div class="common-box type-2"> <span class="count">03</span> <i class="icon"><img src="img/jobseeker-icon-3.png" alt=""/></i>
        <h3>Shortlisted</h3>
      </div>
    </div>
  </div>
</section>
<hr class="divider"/>
<section class="common-row lgray p-0">
  <div class="tab-wrap-nav">
    <div class="container">
      <div class="flex">
        <ul class="tab-type">
          <li class="active"><a href="#">Jobs Applied Recently</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="job-row-wrap type-2">
    <div class="job-row">
      <div class="container">
        <p class="hour">5 HOURS AGO</p>
        <div class="flex">
          <div class="img-box">
            <div class="lazy-image"> <img src="img/truck-icon-2.png" alt=""/> </div>
          </div>
          <div class="box">
            <h3>TRUCK DRIVER, CALGARY</h3>
            <p>KPM AUTOMOTIVES</p>
          </div>
          <div class="box">
            <h4>EXPIRES  18/09/2021</h4>
          </div>
          <div class="box">
            <h4><img src="img/ribban-shape.jpg" alt=""/></h4>
          </div>
        </div>
        <p class="view-more"><a href="#">VIEW MORE</a></p>
      </div>
    </div>
    <div class="job-row">
      <div class="container">
        <p class="hour">5 HOURS AGO</p>
        <div class="flex">
          <div class="img-box">
            <div class="lazy-image orrange"> <img src="img/food-icon-2.png" alt=""/> </div>
          </div>
          <div class="box">
            <h3>INDIAN CHEF, MONTREAL</h3>
            <p>INDIAN CURRY HOUSE</p>
          </div>
          <div class="box">
            <h4>EXPIRES  07/11/2021</h4>
          </div>
          <div class="box">
            <h4><img src="img/ribban-shape.jpg" alt=""/></h4>
          </div>
        </div>
        <p class="view-more"><a href="#">VIEW MORE</a></p>
      </div>
    </div>
    <div class="job-row">
      <div class="container">
        <p class="hour">5 HOURS AGO</p>
        <div class="flex">
          <div class="img-box">
            <div class="lazy-image"> <img src="img/truck-icon-2.png" alt=""/> </div>
          </div>
          <div class="box">
            <h3>TRUCK DRIVER, CALGARY</h3>
            <p>KPM AUTOMOTIVES</p>
          </div>
          <div class="box">
            <h4>EXPIRES  23/09/2021</h4>
          </div>
          <div class="box">
            <h4><img src="img/ribban-shape.jpg" alt=""/></h4>
          </div>
        </div>
        <p class="view-more"><a href="#">VIEW MORE</a></p>
      </div>
    </div>
    <div class="job-row">
      <div class="container">
        <p class="hour">5 HOURS AGO</p>
        <div class="flex">
          <div class="img-box">
            <div class="lazy-image violet"> <img src="img/hotel-icon-2.png" alt=""/> </div>
          </div>
          <div class="box">
            <h3>MANAGER, EDMONTON</h3>
            <p>LAKE VIEW HOTELS</p>
          </div>
          <div class="box">
            <h4>EXPIRES  24/09/2021</h4>
          </div>
          <div class="box">
            <h4><img src="img/ribban-shape.jpg" alt=""/></h4>
          </div>
        </div>
        <p class="view-more"><a href="#">VIEW MORE</a></p>
      </div>
    </div>
  </div>
</section>

  </>;
};
