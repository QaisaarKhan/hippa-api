const express = require('express');
const router = express.Router();
const PatientController = require('../app/controllers/PatientController');
const validate=require('../app/middlewares/validators')

// router.get('/login', AuthController.loginPage);
router.post('/',validate.createPatient, PatientController.createPatient);
// get list of all patients
router.get('/', PatientController.getPatient);
// get a patient by Id
router.get('/:id', PatientController.getPatientById);
// update a patient by Id
router.patch('/:id',validate.updatePatient, PatientController.updatePatient);
// delete a patient by Id
router.delete('/:id', PatientController.removePatientById);



module.exports = router;