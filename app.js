const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const path = require('path');

dotenv.config({ path: './config.env' });
require('./data');

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "frontend", "build"))); // Serve static files globally

app.use(require('./routers')); // Your other routes

const PORT = process.env.PORT || 5000;

// Serve React app for all routes except the ones handled by other route handlers
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`);
});
