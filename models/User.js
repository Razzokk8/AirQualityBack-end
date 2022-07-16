const { Schema, model, ObjectId, Types } = require('mongoose');

const userSchema = new Schema({

    firstName: {type: String,
    required : true
    },
    lastName: {type: String,
    required : true
    },
    email: {type: String,
    required: true
    },
    passWord: {type:String,
    required: true
    },
    registrationDate: {type: Date, default: Date.now()},
    userToken : {
        type: String,
        required: true,
        default: Types.ObjectId(),
    }
});

const User = model('User', userSchema);

module.exports = User;