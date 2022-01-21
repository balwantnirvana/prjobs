import React, { useState, useEffect } from "react";
import BannerDashboard from "../banner/BannerDashboard";
import ProfileHeader from "../profile/ProfileHeader";
import { Link } from "react-router-dom";
import { jobActions } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../../../helpers";
import { JobOverview } from "./JobOverview";

export const JobsPosted = () => {
  const [frmstate, setFrmstate] = useState({ message: "", loading: true, deleting: false });
  const [values, setValues] = useState([]);
  const dispatch = useDispatch();
  const fetchJob = async () => {
    dispatch(jobActions.getAll(currentUser().id)).then((data) => {
      setValues([...data.payload]);
      //console.log(data);
    });
  };

  useEffect(() => {
    fetchJob();
  }, []);
  const handleDelete = (e, id) => {
    e.preventDefault();
    setFrmstate({...frmstate, deleting:true});
    console.log(id)
    dispatch(jobActions.deleteJob(id)).then((data) => {
      //fetchJob();
      setFrmstate({...frmstate, deleting:false});
      //console.log(data);
    });
  }

  return (
    <>
      <BannerDashboard />
      <ProfileHeader bc="true" title="Job posted" />
      <section className="common-row lgray p-0">
        <div className="tab-wrap-nav type-2">
          <div className="container">
            <div className="flex">
              <ul className="tab-type">
                <li className="active">
                  <a href="#">ALL JOBS</a>
                </li>
              </ul>
              <div className="add-box">
                <Link className="btn xs-btn ws-w" to="/add-job">Add New <i className="fa fa-plus"></i></Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="tab-wrap-nav">
    <div className="container">
      <div className="flex">
        <ul className="tab-type">
          <li className="active"><a href="#">JOBS POSTED</a></li>
          <li><a href="#">MOST RECENT</a></li>
          <li><a href="#">MANAGE POSTINGS</a></li>
        </ul>
        <div className="page-nav">
          <p>Page 1/20</p>
          <a href="#"> <img src="img/right-arrow.png" alt=""></a> </div>
      </div>
    </div>
  </div> */}

        <div className="job-row-wrap">
          {values &&
            values.map((job, index) => <JobOverview key={index} handleDelete = {handleDelete} deleting={frmstate.deleting} data={job} />)}
        </div>
      </section>
    </>
  );
};
