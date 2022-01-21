import React, { useState, useEffect } from "react";
import { Banner } from "./Banner";
import { currentUser, provinces } from "../../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { employerActions, jobActions } from "../../../redux/actions";
import { jobService } from "../../../services";
import { useHistory, useParams} from "react-router-dom";
export const ViewJob = () => {
    let dataField = {
        uid: "",
        job_title: "",
        job_category: "",
        employer: "",
        city: "",
        province: "",
        country: "",
        website: "",
        end_date: "",
        job_type: "",
        sallery_min: "",
        sallery_max: "",
        education: "",
        education_detail: "",
        experience: "",
        skills: "",
        skills2: "",
        capability: "",
        documents: "",
      };

      const jobdata = useSelector((state) => state.jobs);
      const [jobvalues, setJobValues] = useState(null);
      const dispatch = useDispatch();
      const { id } = useParams();
      const fetchJob = async () => {
        dispatch(jobActions.getById(id)).then((data) => {
          setJobValues({ ...data.payload});
          console.log("Done!");
        });
      };

      const updateObj = (job) => {
        console.log(job);
      dataField.job_title =  job.job_title;
      dataField.job_category = job.category;
      dataField.employer = job.employer;
      dataField.city = job.city;
      dataField.province = job.province;
      dataField.country = job.country;
      dataField.website = job.website;
      dataField.end_date = job.end_date;
      dataField.job_type = job.job_type;
      dataField.sallery_min = job.sallery_min;
      dataField.sallery_max = job.sallery_max;
      dataField.education = job.education;
      dataField.education_detail = job.education_detail;
      dataField.experience= job.experience;
      dataField.skills = job.skills;
      dataField.skills2 = job.skills2;
      dataField.capability = job.capability;
      dataField.documents = job.documents;
      
      //setJobValues({ ...dataField });
    };

    useEffect(() => {
        //fetchEmployer();
        fetchJob();
      }, []);


    return (
        <>
         <Banner title="JOBS IN CANADA" />
         {jobvalues && (
          <section className="common-content dgray">
  <div className="container">
    <div className="opening open-detail"> <i className="icon red-bg flaticon-settings"></i>
      <div className="box">
        <h3>{jobvalues.job_title}</h3>
        {/* <p>Automotive</p> */}
        <ul className="option">
          <li><i className="flaticon-placeholder"></i> {jobvalues.city} </li>
          <li><i className="flaticon-clock"></i> {jobvalues.job_type} </li>
          <li><i className="flaticon-mortarboard"></i> High School Diploma </li>
        </ul>
      </div>
      <div className="box">
        <p className="price">${jobvalues.sallery_min} - ${jobvalues.sallery_max}</p>
      </div>
    </div>
    <div className="two-aside">
      <div className="big-col">
        <div className="job-details">
          {/* <h4>Job Description</h4> */}
         
          <h5>Education</h5>
          {jobvalues.education_detail}
          <h5>Skills</h5>
          {jobvalues.skills}
          {/* <ul>
            <li> Vestibulum nec ligula nec orci convallis consectetur.</li>
            <li>Duis pulvinar ipsum in nibh tincidunt, nec scelerisque arcu egestas.</li>
            <li>Integer ultrices quam id dui vestibulum, at consequat nunc consectetur.</li>
            <li>Nam quis justo vitae velit tincidunt lobortis.</li>
          </ul> */}
        </div>
        {/* <div className="related-jobs">
          <h2>Other jobs you may like</h2>
          <div className="opening-row-wrap type-2"> <a href="#" className="opening"> <i className="icon blue-bg flaticon-reception"></i>
            <div className="box">
              <h3>Marine Engine Mechanic</h3>
              <p>Automotive</p>
            </div>
            <div className="box">
              <p className="price">20$ - 30$ an hour</p>
              <ul className="option">
                <li><i className="flaticon-placeholder"></i> Canada </li>
                <li><i className="flaticon-clock"></i> Full Time </li>
                <li><i className="flaticon-mortarboard"></i> High School Diploma </li>
              </ul>
            </div>
            </a> </div>
        </div> */}
      </div>
      <div className="aside">
        <div className="apply-box"> <a href="#" className="btn">Apply for the job</a> <a href="#">Contact Employer</a> </div>
      </div>
    </div>
  </div>
</section>  )}
        </>
    )
}
