const express = require('express');
const router = express.Router();
const {authenticateToken } = require("../utils/token");
//const uploadFile = require('../middleware/ImageUpload');
const {
    addJob,
    updateJob,
    getById,
    getAll,
    deleteJob,
  } = require('../controllers/job.controller');
  

  router.post('/job/add', authenticateToken, addJob);
  router.get('/job/:id', authenticateToken, getById); 
  router.put('/job/:id', authenticateToken, updateJob);
  router.get('/job/all/:id', authenticateToken, getAll);  
  router.delete('/job/:id', authenticateToken, deleteJob);  
 
  module.exports = router;