const express = require('express');
const router = express.Router();
const {authenticateToken } = require("../utils/token");
const {
    getCountry,
  } = require('../controllers/misc.controller');
  
 
  router.get('/country', authenticateToken, getCountry);
  //router.get('/employer/:id', authenticateToken, getEmployerById); 
  //router.put('/employer/:id', authenticateToken, updateEmployer);
  //router.post('/employer/uploads', uploadFile.single("file"), employerUploads);
  //router.get('/employer/all/:id', authenticateToken, getAllEmployer);  
 
  module.exports = router;