const { default: mongoose } = require('mongoose');
const Department = require('../model/Department');
const { find } = require('../model/Doctor');
const Doctor = require('../model/Doctor');

async function createDepartment(depName) {
	const createdDepartment = new Department({
		departmentName: depName,
		doctors: [],
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

// LATER - NOT SURE SHOULD WE KEEP PRIORITY SCORE AS NUM OF PATIENTS OR NOT
// async function addDoctorToDepartment(departmentId, doctor) {
// 	try {
// 		const department = await Department.findById(departmentId);
// 		if (!department) {
// 			throw new Error('Department not found');
// 		}
// 		// Take doctor patient list's length as priority score
// 		const priorityScore = doctor.patients.length;

// 		// Find the correct position to add doctor
// 		let index = department.doctors.findIndex(
// 			(item) => item.priority < priorityScore
// 		);

// 		if (index == -1) {
// 			index = department.doctor.length;
// 		}

// 		// Insert the new doctor object into the doctorQueue array at the correct position
// 		department.doctors.splice(index, 0, { doctor, priority: priorityScore });
// 		// department.doctors.push(doctor);
// 		await department.save();
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

async function addDoctorToDepartment(departmentId, doctor) {
	try {
		const department = await Department.findById(departmentId);
		if (!department) {
			throw new Error('Department not found');
		}
		department.doctors.push(doctor);
		await department.save();
	} catch (error) {
		console.error(error);
	}
}

async function getRandomDoctor(departmentID) {
	try {
		const department = await Department.findById(departmentID);
		if (!department) {
			throw new Error('Department not found');
		}
		const randomIndex = Math.floor(Math.random() * department.doctors.length);
		const designatedDoctor = department.doctors[randomIndex];
		return designatedDoctor;
	} catch (error) {
		console.log(error);
	}
}

exports.createDepartment = createDepartment;
exports.addDoctorToDepartment = addDoctorToDepartment;
exports.getRandomDoctor = getRandomDoctor;
