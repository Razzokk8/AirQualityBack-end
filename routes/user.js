const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const router = express.Router()

router.post("/create", async (req, res) => {
    // const {body} = req;
    const {passWord, firstName, lastName, email} = req.body;
  try {
    const hashedPassword = await bcrypt.hash(passWord, 10)
    const users = await User.create({

    firstName: firstName,
    lastName: lastName,
    email: email,
    passWord: hashedPassword

});
    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).send("Data not valid 🖕");
  }
});

module.exports = router