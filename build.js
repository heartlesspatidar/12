const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

dotenv.config({ path: './config.env' });
require('./data');

app.use(express.json());
app.use(cors());
app.use(require('./routers'));

const PORT = process.env.PORT || 5000;

// app.get('/New', (req, res) => {
//     res.send('Welcome to my signin page');
// });

app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`);
});


