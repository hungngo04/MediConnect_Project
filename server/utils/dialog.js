const Dialogflow = require('@google-cloud/dialogflow');
const { v4: uuidv4 } = require('uuid');
const Path = require('path');

require('dotenv').config();
const mes = 'I have a sore throat';

async function getDialogData(message) {
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

	// console.log(request);

	const responses = await sessionClient.detectIntent(request);

	if (!responses) {
		throw new Error('No data available');
	}
	return responses;
}

async function getIntent(message) {
	const res = await getDialogData(message);
	return res[0].queryResult.parameters.fields.illness.stringValue;
}

// async function testGetIntent() {
// 	const result = await getIntent(mes);
// 	console.log(result);
// }

// testGetIntent();

module.exports = getDialogData;
module.exports = getIntent;
