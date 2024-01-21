const express = require('express');
const cors = require('cors');
const path = require('path');
const fileHandler = require('./handlers/fileHandler');
const objectHandler = require('./handlers/objectHandler');
const infoHandler = require('./handlers/infoHandler');

const app = express();
app.use(express.json());

const whitelist = ['http://localhost:3003', 'http://localhost:3001'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};
app.use(cors(corsOptions));

app.get('/duck', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets/pages/duck.html'));
});
app.get('/goose', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets/pages/goose.html'));
});
app.get('/hen', (req, res) => {
    res.sendFile(path.join(__dirname, 'assets/pages/hen.html'));
});
app.get('/file/:filename', fileHandler);
app.get('/objects/:type/:id', objectHandler);
app.get('/objects/:type', objectHandler);
app.get('/objects', objectHandler);
app.get('/info', infoHandler);

app.use((req, res, next) => {
    res.status(404).send("Sorry, that route doesn't exist.");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
