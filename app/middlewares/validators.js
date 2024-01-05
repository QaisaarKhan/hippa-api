const validator = require('validator');


exports.signUp = (req, res, next) => {
	const validationErrors = {};

	if (!validator.isEmail(req.body.email)) validationErrors["email"] = "Email is not a valid email address"
	if (validator.isEmpty(req.body.password)) validationErrors["password"] = "Password is required";
	else if (!validator.isStrongPassword(req.body.password)) validationErrors["password"] = "Use a strong password";

	if (Object.keys(validationErrors).length){
		return res.status(400).send({ status: false, messages: validationErrors });
	}
	next();
}

exports.createPatient = (req, res, next) => {
	const validationErrors = {};
	
	if (!validator.isEmail(req.body.email)) validationErrors["email"] = "Email is not a valid email address"
	if (validator.isEmpty(req.body.fullName)) validationErrors["fullName"] = "Full Name is required"
	if (validator.isEmpty(req.body.insuranceId)) validationErrors["insuranceId"] = "Insurance Id is required"
	if (validator.isEmpty(req.body.gender)) validationErrors["gender"] = "Gender is required"
	if (Object.keys(validationErrors).length){
		return res.status(400).send({ status: false, message: validationErrors });
	}
	next();

}

exports.updatePatient = (req, res, next) => {
	const validationErrors = {};
	if (req.body.email&&!validator.isEmail(req.body.email)) validationErrors["email"] = "Email is not a valid email address";
	if (Object.keys(validationErrors).length){
		return res.status(400).send({ status: false, message: validationErrors });
	}
	next();

}