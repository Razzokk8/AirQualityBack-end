const express = require('express')
const User = require('../models/User')
const router = express.Router()
const bcrypt = require('bcrypt')

router.post("/create", async (req, res) => {
    const {body} = req;
  try {
    const hashedPass = await bcrypt.hash(req.body.password, 10)
    const users = await User.create({

    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    passWord: hashedPass

});
    return res.status(200).json(users)

  } catch (error) {
    return res.status(500).send("Data not valid 🖕");
  }
});

module.exports = router