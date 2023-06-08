const { default: mongoose } = require('mongoose');
const Department = require('../model/Department');

async function createDepartment(depName) {
	const createdDepartment = new Department({
		departmentName: depName,
		// TODO - doctors
	});

	try {
		const sess = mongoose.startSession();
		sess.startSession();
		await createdDepartment.save({ session: sess });
		sess.commitTransaction();
	} catch (error) {
		console.error(error);
	}
}

exports.createDepartment = createDepartment;
