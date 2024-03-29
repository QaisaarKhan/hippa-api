const express = require('express');
const router = express.Router();
const AuthController = require('../app/controllers/AuthController');
const validate=require('../app/middlewares/validators')
// router.get('/login', AuthController.loginPage);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);
router.get('/verify', AuthController.accountVerify);
// router.get('/sign-up', AuthController.signUpPage);
router.post('/sign-up',validate.signUp, AuthController.signUp);
// router.get('/forgot-password', AuthController.forgotPasswordPage);
router.post('/forgot-password', AuthController.forgotPassword);
router.post('/reset-password', AuthController.resetPassword);



module.exports = router;