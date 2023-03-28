var mongoose = require('mongoose');
const { Schema } = mongoose;

const reservSchema=new Schema({
    guests:{
        type:String
    },
    first_name:{
        type:String,
        required: true
    },
    last_name:{
        type:String,
        required: true
    },
    phone_no:{
        type:String,
        required:true
    },
    reservation_time:{
        type:String,
        required:true
    },
    reservation_date:{
         type:Date,
         required:true
    },
    email:{
        type:String,
         required:true
    }
},
{
    timestamps:true
})

module.exports.Reservation=mongoose.model('reservation',reservSchema)