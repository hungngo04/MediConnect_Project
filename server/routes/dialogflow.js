const express = require('express');
const getDialogData = require('../utils/dialog');
const getIntent = require('../utils/dialog');

const app = express.Router();

app.post('/text-input', async (req, res) => {
	const { message } = req.body;

	// Send data from the agent as response
	try {
		const responses = await getIntent(message);
		res.status(200).send({
			data: responses,
		});
	} catch (error) {
		console.log(error);
		res.status(422).send({ error });
	}
});

// FOR LATER USE IN CASE OF VOICE
// app.post("/voice-input", (req, res) => {
//   res.status(200).send({ data : "VOICE ENDPOINT CONNECTION SUCCESSFUL" })
// });

module.exports = app;
