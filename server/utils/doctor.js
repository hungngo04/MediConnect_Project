const { default: mongoose } = require('mongoose');
const Doctor = require('../model/Doctor');

// Push doctor information to MongoDB
async function createDoctor(name, birthday, phone) {
	const createdDoctor = new Doctor({
		name: name,
		doctorBirthDate: birthday,
		phoneNumber: phone,
		// TODO - department
	});

	try {
		const sess = await mongoose.startSession();
		sess.startTransaction();
		await createdDoctor.save({ session: sess });
		sess.commitTransaction();
	} catch (error) {
		console.error(error);
	}
}

exports.createDoctor = createDoctor;
