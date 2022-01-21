import React,{useState, useEffect} from 'react'
import { Banner } from './Banner'
import { useForm } from "react-hook-form";
import { currentUser, provinces } from '../../../helpers';
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import {employerActions } from "../../../redux/actions"
import {jobService} from "../../../services"
import { useHistory } from 'react-router-dom';
export const AddJob = () => {
  const [frmstate, setFrmstate] = useState({ message: "", submitted: false });
    const [startDate, setStartDate] = useState(new Date());
    const {register,handleSubmit,formState: { errors }, } = useForm();
    //const empdata = useSelector((state) => state.employerDetail);
    const [empvalues, setEmpValues] = useState([]);
    const history = useHistory();
  const dispatch = useDispatch();
  const  fetchJob = async () => { 
    dispatch(employerActions.getAll(currentUser().id)).then((data)=>{
      setEmpValues([...data.payload]);
      console.log('Done!');
    })
  }

  useEffect(() => {
    fetchJob();
  }, []);
    
  

  const onSubmit = async (data ) => {
    setFrmstate({...frmstate,message: "",submitted: true });
    data['uid'] =  currentUser().id;
    data['end_date'] =  startDate;
    try {
      const response = await jobService.addJob(data);
      setFrmstate({...frmstate,message: response.msg,submitted: false });
      //e.target.reset();
      setTimeout(()=>{
         history.push('/jobs-posted'); 
      },2000)
      console.log(response);
      
    } catch (error) {
      console.log(error);
      setFrmstate({...frmstate,message: error.msg,submitted: false });
      //e.target.reset();
    }
  }

    return (
        <>
            <Banner title="JOB POSTING"/>
            <section className="common-content dgray">
  <div className="container">
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="common-form form-field">
    
      <div className="row">
        <div className="col-sm-12">
          <label>Position / Designation of the Opening </label>
          <input type="text" placeholder="E.g. Position / Designation you are looking to hire." {...register("job_title", { required: true })}/>
          {errors.job_title && <p className="error">Please fill the required field.</p>}
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <label>Company Name/Employer</label>
          {/* <input type="text"  {...register("company_name", { required: true })} placeholder="E.g. ABC Corporation"/> */}
          <select {...register("employer", { required: true })}>
          <option value="">--Select--</option>
          {empvalues && empvalues.map((option,i) => (
          <option value={option.id} key={i}>{option.business_name}</option>
          ))}
          </select>
          {errors.company_name && <p className="error">Please select the required field.</p>}
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <label>City</label>
          <input type="text" {...register("city", { required: true })} placeholder="E.g. Sydney"/>
        </div>

        <div className="col-sm-6">
          <label>State/Province</label>
            <select  {...register("province", { required: true })}>
              <option value="">--Select--</option>
              {provinces().map((option,i) => (
              <option value={option.name} key={i}>{option.name}</option>
              ))}
        
            </select>
            {errors.province && <p className="error">Please fill the required field.</p>}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <label>Select country</label>
            <select  value="Canada" {...register("country", { required: true })}>
              <option>--Select--</option>
              <option value="Canada">Canada</option>
            </select>
            {errors.country && <p className="error">Please fill the required field.</p>}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <label>Website</label>
          <input type="text" {...register("website")} placeholder="E.g. http://www.example.com"/>
        </div>
        <div className="col-sm-6">
          <label>Apply Before Date</label>
          <div className="icon-field"> <i className="fa fa-calendar-alt right"></i>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            
          </div>
        </div>
      </div>
 

      <div className="row">
        <div className="col-sm-12">
          <label>Job Type</label>
            <select {...register("job_type", { required: true })}>
              <option>--Select--</option>
              <option value="Full Time">Full Time</option>
              <option value="Hourly">Hourly</option>
            </select>
            {errors.job_type && <p className="error">Please fill the required field.</p>}
        </div>
      </div>
     

      <div className="row">
        <div className="col-sm-6">
          <label>Sallery min</label>
          <input type="number"  {...register("sallery_min", { required: true })} placeholder="E.g. 5K"/> 
          {errors.sallery_min && <p className="error">Please fill the required field.</p>}   
        </div>
        <div className="col-sm-6">
          <label>Sallery max</label>
          <input type="number"  {...register("sallery_max", { required: true })} placeholder="E.g. 20K"/>    
          {errors.sallery_max && <p className="error">Please fill the required field.</p>}   
        </div>
      </div>


      <div className="row">
        
        <div className="col-sm-6">
          <label>Required Educational Qualifications</label>
          <div className="choice">
            <label>
              <input type="checkbox"/>
              High School Diploma</label>
            <label>
              <input type="checkbox"/>
              College Degree</label>
            <label>
              <input type="checkbox"/>
              Post Graduate Degree</label>
            <label>
              <input type="checkbox"/>
              Industry Specific Certification</label>
          </div>
        </div>
      </div>
    
      <div className="row">
        <div className="col-sm-12">
          <label>Additional Educational Details </label>
          <textarea {...register("education_detail", { required: false })} placeholder="E.g. Additional Information pertaining to educational qualifications or certifications specific to your job opening. "></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <label>Years Of Experience </label>
          <div className="choice lg">
            <label className="auto">
              <input type="checkbox" {...register("experience", { required: true })}/>
              0 - 1 Year </label>
            <label className="auto">
              <input type="checkbox"/>
              1 - 2 Years </label>
            <label className="auto">
              <input type="checkbox"/>
              2 - 3 Years</label>
            <label className="auto">
              <input type="checkbox"/>
              3 - 4 Years </label>
            <label className="auto">
              <input type="checkbox"/>
              5 Years +</label>
          </div>
        </div>
       
      </div>
      <div className="row">
        <div className="col-sm-12">
          <label>Primary Job Specifications & Skills</label>
          <textarea {...register("skills", { required: true })} placeholder="E.g. An in depth description of the skills required to apply for this job "></textarea>
          {errors.skills && <p className="error">Please fill the required field.</p>} 
        </div>
        <div className="col-sm-12">
          <label>Additional Job Specifications & Skills</label>
          <textarea {...register("skills2", { required: false })} placeholder="E.g. An in depth description of the additional skills required to apply for this job"></textarea>
        
        </div>
        <div className="col-sm-12">
          <label>Work Conditions & Physical Capabilities</label>
          <textarea {...register("capability", { required: false })} placeholder="E.g. An in depth description of the work conditions and expected physical capabilities required to apply for this job "></textarea>
        </div>
        
        {/* <div className="col-sm-12">
          <label>Software & Business Systems</label>
          <textarea placeholder="E.g. please specify details on the softwares and business systems that the applicant would need to be aware of to apply for the position"></textarea>
        </div> */}
        <div className="col-sm-12">
          <label>List Of Documentation </label>
          <textarea {...register("documents", { required: false })} placeholder="E.g. please list a set of personal documents you would require from the candidate so that they can apply for the position"></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <input type="submit" value="Submit Your Opening" disabled={frmstate.disabled} className="btn"/>
        </div>
      </div>
      {frmstate.message && <div className="row"> <div className="col-sm-12"><p className='msg'>{frmstate.message}</p></div></div>}
      
    </div>
    </form>
  </div>
</section>
        </>
    )
}
