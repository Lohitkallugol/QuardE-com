const express = require("express");
const crypto = require('crypto');
const router = express.Router();
const bcrypt = require('bcrypt');

//Models
const sellerModel = require("../Models/seller.model");

router.get("/", async (req, res) => {
  try {
    const sellersData = await sellerModel.find();
    res.json(sellersData);
  } catch (errr) {
    console.log("Insert Server Error: EndPoint /sellers" + errr);
    res.status(500).send("Insert Server Error" + errr);
  }
});

// Seller registration route
router.post('/add-seller', async (req, res) => {
  try {
    console.log('seller');
    const { email, password, username } = req.body;

    // Check if email already exists
    const existingSeller = await sellerModel.findOne({ email });
    if (existingSeller) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password using SHA-256 and truncate to 20 characters
    const hash = crypto.createHash('sha256').update(password).digest('hex').slice(0, 20);

    // Create new seller with hashed password
    const newSeller = await sellerModel.create({
      email,
      password: hash,
      username,
    });

    console.log(newSeller);
    res.status(200).send({ result: true, message: 'Seller registration successful',newSeller });
  } catch (err) {
    res.status(500).send({ message: 'Internal server error', err: err.message });
    console.log(err);
  }
});

// Seller login route
router.post('/seller-login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the seller by email
    const seller = await sellerModel.findOne({ email });

    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }

    // Hash the provided password using SHA-256 and truncate to 20 characters
    const hash = crypto.createHash('sha256').update(password).digest('hex').slice(0, 20);

    // Compare the hashed password with the stored hash
    if (hash !== seller.password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Passwords match, login successful
    res.status(200).send({ result: true, message: "logged in successfully", seller });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error', error: err.message });
    console.log(err);
  }
});


module.exports = router;
