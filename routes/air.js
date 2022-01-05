const express = require('express')
const AirQuality = require('../models/SubmitAir')
const User = require('../models/User')
const router = express.Router()

router.post("/submit", async (req, res) => {
    const {body} = req;

  try {

    const user = await User.findById(body.userId) 

    if (user.userToken != body.userToken){
        throw "Invalid token 🥺"
    }
    
    const airQualitys = await AirQuality.create({
    
    userId: body.userId,
    time: body.time,
    city_name: body.city_name,
    temperature:body.temperature,
    humidity: body.humidity,
    pm10: body.pm10,
    pm25: body.pm25,
    CO2: body.CO2,
    Ozone: body.Ozone,
    VOC: body.VOC,
    pollen_level_air: body.pollen_level_air,
    userToken: body.userToken
});
    return res.status(200).json(airQualitys)
  } catch (error) {
    return res.status(500).send("Data not valid 🖕");
  }

});

router.get("/getAirCondition/:startDate/:endDate", async (req, res) => {

    const startDate = req.params.startDate;
    const endDate = req.params.endDate;

  try {
    
    const airQualitys = await AirQuality.find({
        time: { $gte: startDate, $lte: endDate }
    });

    return res.status(200).json(airQualitys)
  } catch (error) {
    return res.status(500).send("Data is not valid 🖕");
  }
});


module.exports = router