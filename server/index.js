const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const Routes = require('./routes/dialogflow');

// Test database
const { chats } = require('./model/data/foo');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', Routes);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

// Test the api 
app.get("/", (req, res) => {
    res.send("Server is running");
})

app.get("/api/chat", (req, res) => {
    const chat = chats.find((c) => c._id === req.params.id);
    res.send(chat);
});

app.get("/api/chat/:id", (req, res) => {
    const chat = chats.find((c) => c._id === req.params.id);
    res.send(chat);
});