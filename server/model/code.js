const mongoose = require('mongoose')


const codeSchema = new mongoose.Schema({

    language:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    createdOn:{
        type:Date,
        required:true
    }

})

module.exports = mongoose.model('Code',codeSchema)
