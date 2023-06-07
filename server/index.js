const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const Routes = require('./routes/dialogflow');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', Routes);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
