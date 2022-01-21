import React, { useState, useEffect } from "react";
import { jobseekerService, userService } from "../../../services";
import { userActions } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { provinces } from "../../../helpers";
import { miscService } from "../../../services";
import { currentUser } from "../../../helpers";

export const EditProfile = ({ setIsEdit}) => {
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [frmstate, setFrmstate] = useState({ message: "", submitted: false });
  const [countrylist, setCountrylist] = useState([]);
  const user_id = currentUser().id;
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
  const [inputs, setInputs] = useState({ ...dataObj });

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
    setInputs({ ...dataObj });
  };
  useEffect(() => {
    if (user.profile) {
      updateObj();
    }
  }, [user.loading]);

  const fetchCountry = async ()=> {
    try {
        const response = await miscService.getCountry();
        if(response){
            setCountrylist([...response.data]);
        }
      } catch (error) {
      }
  }
  useEffect(() => {
    fetchCountry();
  }, [setInputs]);

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

  } = inputs;



  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFrmstate({...frmstate, submitted: true, message: "" });
    try {
      inputs.id = user_id;
      const response = await jobseekerService.update(inputs);
      setFrmstate({...frmstate, submitted: false, message: response.msg });
      dispatch(userActions.getById(user_id)).then(()=>{
        
        setTimeout(() => {
         setIsEdit(false);
        }, 2000);
        
      })
      
    } catch (error) {
      setFrmstate({...frmstate, submitted: false, message: error.msg });
     
    }
  };

  
 
  if (user.loading) {
    //return null;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex-field edit-ifno">
        <div className="box"></div>
      </div>
      <div className="flex-field">
      <div className="box">
          <div className="box-in">
            <label>Nationality :</label>
          </div>
          <div className="box-in">
          <select name="nationality" value={nationality} onChange={handleChange} required>
              <option value="">--Select--</option>
              {countrylist &&  countrylist.map((option,i) => (
              <option value={option.country} key={i}>{option.country}</option>
              ))}
              
            </select>
          </div>
        </div>
        </div>
      <div className="flex-field">
        <div className="box">
          <div className="box-in">
            <label>Country of residence at present</label>
          </div>
          <div className="box-in">
            <select name="country" value={country} onChange={handleChange} required>
              <option value="">--Select--</option>
              {countrylist &&  countrylist.map((option,i) => (
              <option value={option.country} key={i}>{option.country}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="box">
          <div className="box-in">
            <label>State/Province :</label>
          </div>
          <div className="box-in">
          <input
              type="text"
              name="province"
              value={province}
              onChange={handleChange}
              required
            />
            
          </div>
        </div>
      
      </div>
      <div className="flex-field">
      <div className="box">
          <div className="box-in">
            <label>City</label>
          </div>
          <div className="box-in">
          <input
              type="text"
              name="city"
              value={city}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="box">
          <div className="box-in">
            <label>Zip Code :</label>
          </div>
          <div className="box-in">
            <input
              type="text"
              name="post_code"
              value={post_code}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="flex-field">
        <div className="box">
          <div className="box-in">
            <label>Your Name : </label>
          </div>
          <div className="box-in">
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="box">
          <div className="box-in">
            <label>Your Email : </label>
          </div>
          <div className="box-in">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="flex-field">
        <div className="box">
          <div className="box-in">
            <label>Your Phone : </label>
          </div>
          <div className="box-in">
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="box">
          <div className="box-in">
            <label>Marital Status :</label>
          </div>
          <div className="box-in">
            <select name="marital_status" value={marital_status} onChange={handleChange} required> 
              <option value="">--Select--</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
          </div>
        </div>
        
      </div>
      <div className="flex-field">
        <div className="box">
          <div className="box-in">
            <label>Date of birth :</label>
          </div>
          <div className="box-in">
            <input
              type="text"
              name="date_of_birth"
              value={date_of_birth}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="box">
          <div className="box-in">
            <label>Education :</label>
          </div>
          <div className="box-in">
          <textarea
              name="education"
              value={education}
              onChange={handleChange}
              required
            ></textarea>
           
          </div>
        </div>
      </div>


      <div className="flex-field">
        <div className="box">
          <div className="box-in">
            <label>IELTS certificate :</label>
          </div>
          <div className="box-in">
          <select name="ielts_certificate" value={ielts_certificate} onChange={handleChange} required>
              <option value="">--Select--</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            
          </div>
        </div>
        <div className="box">
          <div className="box-in">
            <label>Any Canadian education :</label>
          </div>
          <div className="box-in">
          <select name="canadian_education" value={canadian_education} onChange={handleChange} required>
              <option value="">--Select--</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex-field" required>
        <div className="box">
          <div className="box-in">
            <label>Skills :</label>
          </div>
          <div className="box-in">
            <input
              type="text"
              name="skills"
              value={skills}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="box">
          <div className="box-in">
            <label>Total experience :</label>
          </div>
          <div className="box-in">
            
             <select name="total_experience" value={total_experience} onChange={handleChange} required>
              <option value="">--Select--</option>
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
              <option value="4">4 Years</option>
              <option value="5">5 Years</option>
              <option value="6">6 Years</option>
              <option value="7">7 Years</option>
              <option value="8">8 Years</option>
              <option value="9">9 Years</option>
              <option value="10">10+ Years</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex-field action-row">
        <div className="box">
          <button
            type="submit"
            className="btn md-btn t-n"
            disabled={frmstate.submitted}
          >
            Save changes
          </button>
        </div>
      </div>
      {frmstate.message && <p className="msg">{frmstate.message}</p>}
    </form>
  );
};
