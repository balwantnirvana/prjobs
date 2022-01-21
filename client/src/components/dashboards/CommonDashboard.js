import React from "react";
import { ConsultantDashboard } from "./consultant/ConsultantDashboard";
import { JobSeekerDashboard } from "./jobseeker/JobSeekerDashboard";
import { currentUser } from "../../helpers";

export const CommonDashboard = () => {
 const user_type = currentUser().user_type;
  console.log(user_type)
  const loadview = () => {
    
    if (user_type === "Consultant")  {
      return (  <ConsultantDashboard />); 
    } else if (user_type === "Employer") {
      return ( <ConsultantDashboard /> )
    } else if (user_type  === "Job Seeker"){
      return (  <JobSeekerDashboard />); 
    }
};
  return (
    <>
      
      {loadview()} 
      <hr className="divider" />
    </>
  );
};
