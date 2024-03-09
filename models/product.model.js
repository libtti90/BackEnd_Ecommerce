const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    characteristics: { type: String, required: true },
    image:{
        type:String,
        required:false,
        trim:true
    },
    image2:{
        type:String,
        required:false,
        trim:true
    },
    fecha: {
        type: Date,
        required: false,
        default: Date.now, 
      },
      createdAt:{
        type:Date,
        default:Date.now}
    

});






module.exports = mongoose.model('Product', productSchema)