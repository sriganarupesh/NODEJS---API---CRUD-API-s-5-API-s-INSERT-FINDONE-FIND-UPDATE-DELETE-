const express = require('express');
const router = express.Router()
const chalapathijoinController = require('../controllers/dept.controllers.js');

// Create a new department
router.post('/post', chalapathijoinController.createDepartment);
// Retrieve all departments
router.get('/all', chalapathijoinController.findAllDepartments);
router.get('/', chalapathijoinController.join);

module.exports = router;


