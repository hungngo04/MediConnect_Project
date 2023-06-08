const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
	doctorBirthDate: { type: Date, required: true },
	phoneNumber: { type: String, required: true },
	patients: [{ type: mongoose.Types.ObjectId, required: false, ref: 'User' }],
	departmentID: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: 'Department',
	},
});

module.exports = mongoose.model('Doctor', doctorSchema);
