require('dotenv').config();

const express = require('express');
const Dialogflow = require('@google-cloud/dialogflow');
const { v4: uuidv4 } = require('uuid');
const Path = require('path');

const app = express.Router();

app.post('/text-input', async (req, res) => {
	const { message } = req.body;

	// Create new session
	const sessionClient = new Dialogflow.SessionsClient({
		keyFilename: Path.join(__dirname, './dialogkey.json'),
	});

	const sessionPath = sessionClient.projectAgentSessionPath(
		process.env.DIALOG_PJ_KEY,
		uuidv4()
	);

	// The dialogflow request object - can put this to body instead
	const request = {
		session: sessionPath,
		queryInput: {
			text: {
				// The query to send to the dialogflow agent
				text: message,
				languageCode: 'en',
			},
		},
	};

	// Send data from the agent as response
	try {
		const responses = await sessionClient.detectIntent(request);
		res.status(200).send({ data: responses });
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
