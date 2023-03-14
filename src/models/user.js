const moongose = require('mongoose');


const userSchema = new moongose.Schema({


    name: {
        type: String,
        unique: true,
    },

    email: {
        type: String,
        unique: true,

    },

    password: {
        type: String,
        required: true,
    },

    // roles:{

    // }

}, {
    timestamps: true,
    versionKey: false
})




module.exports = moongose.model('User', userSchema);