const db = require("../config/db.config");
const path = require('path');

const dataObj = () => {
  const dataField = {
    uid : "",
    job_title: "",
    job_category: "",
    employer: "",
    city: "",
    province: "",
    country : "",
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
  return dataField;
};

const addJob = async (req, res) => {
    const {
      uid,
      job_title,
      employer,
      city,
      province,
      country,
      website,
      end_date,
      job_type,
      sallery_min,
      sallery_max,
      education_detail,
      skills,
      skills2,
      capability,
      documents

    } = req.body;
    
    try {
      if (!(uid && job_title && employer)) {
        res.status(400).send({
          msg: "All input is required",
          success: false,
        });
      }
      let dataField = dataObj();
  
      dataField.uid = parseInt(uid);
      dataField.job_title = job_title;
      dataField.employer =  parseInt(employer);
      dataField.city = city;
      dataField.province = province;
      dataField.country = country;
      if(website!=''){
        dataField.website = website; 
      }
    
      dataField.end_date = end_date;
      dataField.job_type = job_type;
      dataField.sallery_min = sallery_min;
      dataField.sallery_max = sallery_max;
      if(education_detail!=''){
        dataField.education_detail = education_detail;
      }
      dataField.skills = skills;
      if(skills2!=''){
        dataField.skills2 = skills2;
      }
      if(capability!='')
      dataField.capability = capability;
      if(documents!='')
      dataField.documents = documents;
      const job = await db.Job.create(dataField);
  
      res.status(201).send({
        msg: "Job successfully Added",
        data: job,
        success: true,
      });
     
      
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
};

const updateJob = async (req, res) => {
  
    let id = parseInt(req.params.id);
    const {
      uid,
      job_title,
      employer,
      city,
      province,
      country,
      website,
      end_date,
      job_type,
      sallery_min,
      sallery_max,
      education_detail,
      skills,
      skills2,
      capability,
      documents

    } = req.body;
    try {
      

      if (!(uid && job_title)) {
        res.status(400).send({
          msg: "All input is required",
          success: false,
        });
      }
      
      let datafield = {};
      datafield.uid = parseInt(uid);
      datafield.job_title = job_title || '';
      datafield.employer = employer;
      datafield.city = city;
      datafield.province = province;
      datafield.country = country;
      datafield.website = website || '';
      datafield.end_date = end_date || '';
      datafield.job_type = job_type || '';
      datafield.sallery_min = sallery_min;
      datafield.sallery_max = sallery_max;
      datafield.education_detail = education_detail;
      datafield.skills = skills || '';
      datafield.skills2 = skills2 || '';
      datafield.capability = capability || '';
      datafield.documents = documents || '';
      

      const job = await db.Job.update(datafield,{ where: { id: id } });
      if(job){
        res.status(202).send({
          msg: "Successfully updated",
          success: true,
        });
      } else {
        res.status(400).send({
          msg: "Something went wrong, please try again",
          success: false,
        });
      }
    
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
};

const getById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db.Job.findByPk(id);
    if (result) {
      res.status(200).send({
        data: result,
        success: true,
      });
    } else {
      res.status(200).send({
        success: false,
        msg: "Sorry we did not find any job",
        data: {}
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const getAll = async (req, res) => {
  try {
    const uid = req.params.id;
    const result = await db.Job.findAll({ where: { uid: uid } });
    if (result) {
      res.status(200).send({
        data: result,
        success: true,
      });
    } else {
      res.status(200).send({
        success: false,
        msg: "Sorry we did not find any job",
        data: {}
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};


const deleteJob = async (req, res) => {  
  try {
    const id = req.params.id;
    const job = await db.Job.findByPk(id);
    //const result = await db.Job.findAll({ where: { uid: uid } });
    if(!job){
      res.status(400).send({
        success: false,
        msg: "Sorry we did not find any job",
      });
    }
    job.destroy();
    res.status(200).send({
      success: true,
      msg: 'Job deleted successfully'
    });
    
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}
module.exports = {
  addJob,
  updateJob,
  getById,
  getAll,
  deleteJob
};
