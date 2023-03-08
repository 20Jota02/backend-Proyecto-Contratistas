const moongose = require('mongoose');

const userSchema = new moongose.Schema({
    name:{
        type: String
    },
    age:{
        type: String
    },
  
    email:{
        type: String
    },

},{
    timestamps:true,
    versionKey:false
})

module.exports = moongose.model('User', userSchema);