const express = require('express')
const User = require('../models/User')
const router = express.Router()

router.post("/create", async (req, res) => {
    const {body} = req;

  try {
    
    const users = await User.create({

    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    passWord: body.passWord,

});
    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).send("Data not valid 🖕");
  }

});




module.exports = router