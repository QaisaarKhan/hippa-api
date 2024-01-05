const crypto = require('crypto');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const sendMail = require('../../helpers/nodeMailer')
// const nodemailer = require("nodemailer");
const validator = require('validator');


exports.createPatient = async (req, res, next) => {
	try {
		const { Patient } = req.db.models;
		console.log("creating patient record", req.body)
		const patientRecord = await new Patient({ ...req.body }).save();
		if (patientRecord) {
			res.status(201).send({ status: true, data: patientRecord })
		} else {
			throw new Error("Unable to create new patient record")
		}
	}
	catch (err) {
		console.log(err)
		return res.status(500).send({ status: false, message: 'Sorry! Somethig went wrong.', err });

	}
};
exports.getPatient = async (req, res, next) => {
	try {
		const { Patient } = req.db.models;
		const Patients = await Patient.findAll({})

		res.status(200).send({ status: true, data: Patients })

	}
	catch (err) {
		console.log(err)
		return res.status(500).send({ status: false, message: 'Sorry! Somethig went wrong.', err });
	}
}


exports.getPatientById = async (req, res, next) => {
	try {
		const pId = req.params.id;
		const { Patient } = req.db.models;
		const Patients = await Patient.findOne({ where: { id: pId } })

		res.status(200).send({ status: true, data: Patients })
	}
	catch (err) {
		console.log(err)
		return res.status(500).send({ status: false, message: 'Sorry! Somethig went wrong.', err });
	}
}

exports.removePatientById = async (req, res, next) => {
	try {
		const pId = req.params.id;

		const { Patient } = req.db.models;
		const Patients = await Patient.destroy({ where: { id: pId } })

		res.status(204).send({ status: true })

	}
	catch (err) {
		console.log(err)
		return res.status(500).send({ status: false, message: 'Sorry! Somethig went wrong.', err });
	}
}
exports.updatePatient = async (req, res, next) => {
	try {
		const pId = req.params.id;

		const { Patient } = req.db.models;
		const Patients = await Patient.findOne({ where: { id: pId } })
		if (!Patients) {
			return res.status(400).send({ status: false, message: "no record found against provided data" })

		}

		Patients.update({ ...req.body })

		return res.status(200).send({ status: true, data: Patients })

	}
	catch (err) {
		console.log(err)
		return res.status(500).send({ status: false, message: 'Sorry! Somethig went wrong.', err });
	}
}