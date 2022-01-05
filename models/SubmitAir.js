const { Schema, model, ObjectId } = require('mongoose');

const airQualitySchema  = new Schema({

    userId :{type: Schema.Types.ObjectId, ref:'User'},

    time:{
        type: Date,
        required: true},
    city_name: {
        type: String,
        required: true
    },
    temperature: {
        type: Number
    },
    humidity: {
        type: Number
    },
    pm10: {
        type: Number
    },
    pm25: {
        type: Number    
    },
    CO2: {
        type: Number
    },
    Ozone: {
        type: Number
    },
    VOC:{
        type: Number
    },
    pollen_level_air: {
        type: String,
        enum: [
            'None', 'Low', 'Moderate', 'High', 'Very high'
        ]
    },
    userToken: {type: String}
});

const SubmitAir = model('SubmitAir', airQualitySchema);

module.exports = SubmitAir;