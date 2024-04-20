const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
// const authenticate = require('../Middleware/middleware');

require('./data');
const User = require('./model');

// router.get('/', (req, res) => {
//     res.send(`Welcome to my router`);
// });



// User registration route
router.post('/New', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill in all the fields properly" });
    }

    if (password !== cpassword) {
        return res.status(422).json({ error: "Passwords do not match" });
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 12); // Hash the password
        const newUser = new User({ name, email, phone, work, password: hashedPassword, cpassword });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to register user" });
    }
});


// User sign-in route
router.post('/Login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const lowercaseEmail = email.toLowerCase();
        const user = await User.findOne({ email: lowercaseEmail });
        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // Debugging: Print the hashed password from the database
        console.log("Hashed Password:", user.password);

        // Check if the provided password matches the hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // Passwords match, user sign-in successful
        res.json({ message: "User sign-in successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
