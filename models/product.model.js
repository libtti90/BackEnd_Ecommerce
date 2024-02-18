const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    materials: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: false },
    characteristics: { type: String, required: false },
    image: {
        type: String,
        required: false
    }



});




module.exports = mongoose.model('Product', productSchema)