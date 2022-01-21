import React, { useState, useEffect } from "react";
import { Banner } from "./Banner";
import { useForm} from "react-hook-form";
import { currentUser, provinces } from "../../../helpers";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { employerActions, jobActions } from "../../../redux/actions";
import { jobService } from "../../../services";
import { useHistory, useParams} from "react-router-dom";
export const EditJob = () => {
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
  const [frmstate, setFrmstate] = useState({ message: "", submitted: false});
  const [startDate, setStartDate] = useState(new Date());
  //const { register, handleSubmit,reset,formState: { errors },} = useForm();
  const jobdata = useSelector((state) => state.jobs);
  
  const [empvalues, setEmpValues] = useState([]);
  const [jobvalues, setJobValues] = useState({ ...dataField });
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobValues((inputs) => ({ ...inputs, [name]: value }));
  };

  const fetchEmployer = async () => {
    dispatch(employerActions.getAll(currentUser().id)).then((data) => {
      setEmpValues([...data.payload]);
      console.log("Done!");
    });
  };
  const fetchJob = async () => {
    dispatch(jobActions.getById(id)).then((data) => {
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
    
    setJobValues({ ...dataField });
  };

  useEffect(() => {
    fetchEmployer();
    fetchJob();
  }, []);

  useEffect(() => {
    if(!jobdata.loading && jobdata.job){
        updateObj(jobdata.job);
        if(jobvalues.end_date!=''){
            //setStartDate(jobvalues.end_date);
        }
      }
  }, [jobdata.loading]);
    

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFrmstate({ ...frmstate, message: "", submitted: true });
    jobvalues["uid"] = currentUser().id;
    jobvalues["id"] = id;
    jobvalues["end_date"] = startDate;
    try {
      const response = await jobService.updateJob(jobvalues,id);
      setFrmstate({ ...frmstate, message: response.msg, submitted: false });
      //e.target.reset();
      setTimeout(() => {
        history.push("/jobs-posted");
      }, 2000);
      console.log(response);
    } catch (error) {
      console.log(error);
      setFrmstate({ ...frmstate, message: error.msg, submitted: false });
      //e.target.reset();
    }
  };
  if(!jobdata.loading){
    //reset(jobvalues)
  }
  return (
    <>
      <Banner title="JOB POSTING" />
      <section className="common-content dgray">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="common-form form-field">
              <div className="row">
                <div className="col-sm-12">
                  <label>Position / Designation of the Opening </label>
                  <input
                    type="text"
                    value={jobvalues.job_title}
                    placeholder="E.g. Position / Designation you are looking to hire."
                    name="job_title"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <label>Company Name/Employer</label>
                  {/* <input type="text"  {...register("company_name", { required: true })} placeholder="E.g. ABC Corporation"/> */}
                  <select name="employer" onChange={handleChange} value={jobvalues.employer} required>
                    <option value="">--Select--</option>
                    {empvalues &&
                      empvalues.map((option, i) => (
                        <option value={option.id} key={i}>
                          {option.business_name}
                        </option>
                      ))}
                  </select>
                 
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <label>City</label>
                  <input
                    value={jobvalues.city}
                    type="text"
                    name="city"
                    onChange={handleChange}
                    placeholder="E.g. Sydney"
                    required
                   
                  />
                </div>

                <div className="col-sm-6">
                  <label>State/Province</label>
                  <select name="province" value={jobvalues.province} onChange={handleChange} required>
                    <option value="">--Select--</option>
                    {provinces().map((option, i) => (
                      <option value={option.name} key={i}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <label>Select country</label>
                  <select
                    value="Canada"
                    name="country"
                    onChange={handleChange}
                    required
                  >
                    <option>--Select--</option>
                    <option value="Canada">Canada</option>
                  </select>
                  
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <label>Website</label>
                  <input
                    type="text"
                    name="website"
                    value={jobvalues.website}
                    onChange={handleChange}
                    placeholder="E.g. http://www.example.com"
                  />
                </div>
                <div className="col-sm-6">
                  <label>Apply Before Date</label>
                  <div className="icon-field">
                   
                    <i className="fa fa-calendar-alt right"></i>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <label>Job Type</label>
                  <select name="job_type" onChange={handleChange } value={ jobvalues.job_type}>
                    <option>--Select--</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Hourly">Hourly</option>
                  </select>
                  
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <label>Sallery min</label>
                  <input
                    type="number"
                    name="sallery_min"
                    onChange={handleChange }
                    value={jobvalues.sallery_min}
                    placeholder="E.g. 5K"
                    required
                  />
                  
                </div>
                <div className="col-sm-6">
                  <label>Sallery max</label>
                  <input
                    type="number"
                    onChange={handleChange }
                    name="sallery_max"
                    value={jobvalues.sallery_max}
                    placeholder="E.g. 20K"
                    required
                  />
                  
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <label>Required Educational Qualifications</label>
                  <div className="choice">
                    <label>
                      <input type="checkbox" />
                      High School Diploma
                    </label>
                    <label>
                      <input type="checkbox" />
                      College Degree
                    </label>
                    <label>
                      <input type="checkbox" />
                      Post Graduate Degree
                    </label>
                    <label>
                      <input type="checkbox" />
                      Industry Specific Certification
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <label>Additional Educational Details </label>
                  <textarea
                    name="education_detail"
                    onChange={handleChange }
                    value={jobvalues.education_detail}
                    placeholder="E.g. Additional Information pertaining to educational qualifications or certifications specific to your job opening. "
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <label>Years Of Experience </label>
                  <div className="choice lg">
                    <label className="auto">
                      <input
                        type="checkbox"
                      />
                      0 - 1 Year
                    </label>
                    <label className="auto">
                      <input type="checkbox" />1 - 2 Years{" "}
                    </label>
                    <label className="auto">
                      <input type="checkbox" />2 - 3 Years
                    </label>
                    <label className="auto">
                      <input type="checkbox" />3 - 4 Years{" "}
                    </label>
                    <label className="auto">
                      <input type="checkbox" />5 Years +
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <label>Primary Job Specifications & Skills</label>
                  <textarea
                    name="skills"
                    value={jobvalues.skills}
                    onChange={handleChange }
                    placeholder="E.g. An in depth description of the skills required to apply for this job "
                  required></textarea>
                 
                </div>
                <div className="col-sm-12">
                  <label>Additional Job Specifications & Skills</label>
                  <textarea
                    name="skills2"
                    onChange={handleChange }
                    value={jobvalues.skills2}
                    placeholder="E.g. An in depth description of the additional skills required to apply for this job"
                  ></textarea>
                </div>
                <div className="col-sm-12">
                  <label>Work Conditions & Physical Capabilities</label>
                  <textarea
                    name="capability"
                    onChange={handleChange }
                    value={jobvalues.capability}
                    placeholder="E.g. An in depth description of the work conditions and expected physical capabilities required to apply for this job "
                  ></textarea>
                </div>

                {/* <div className="col-sm-12">
          <label>Software & Business Systems</label>
          <textarea placeholder="E.g. please specify details on the softwares and business systems that the applicant would need to be aware of to apply for the position"></textarea>
        </div> */}
                <div className="col-sm-12">
                  <label>List Of Documentation </label>
                  <textarea
                    name="documents"
                    onChange={handleChange}
                    value={jobvalues.documents}
                    placeholder="E.g. please list a set of personal documents you would require from the candidate so that they can apply for the position"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <input
                    type="submit"
                    value="Update Job"
                    disabled={frmstate.disabled}
                    className="btn"
                  />
                </div>
              </div>
              {frmstate.message && (
                <div className="row">
                  <div className="col-sm-12">
                    <p className="msg">{frmstate.message}</p>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
