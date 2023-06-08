const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const departmentSchema = new Schema({
	departmentName: { type: String, required: true },
	doctors: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Doctor' }],
});

module.exports = mongoose.model('Department', doctorSchema);
