const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const categorySchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 50
    },
    description: {
        type: String,
        maxlength: 255
    }
});



module.exports=mongoose.model("Category",categorySchema);