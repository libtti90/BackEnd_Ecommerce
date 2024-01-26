const mongoose =require('mongoose');
const Schema=mongoose.Schema;

//receta como armar usuario

const userSchema=new Schema({
    name:{type:String, required:true, minlength:3, maxlength:60},
    email:{type:String, 
        required:true,
         unique:true, 
         lowercase:true,
         trim:true, 
         minlength:6,
         maxlength:80,
         index:true,
         validate:{ 
        validator:function(){
            const regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/;
            return regex.test()
        }
    } },
    password:{
        type:String, 
        required:true,
         trim:true, 
         maxlength:70,
 
    },
    age:{
        type:Number,
        required:true,
        min:12,
        max:120
    },
    image:{
        type:String,
        required:false,
        trim:true
    },
    role:{
        type:String,
        required:false,
        default:'USER_ROLE',
        enum:[
            'USER_ROLE',
            'CLIENT_ROLE',
            'ADMIN_ROLE'
        ]
    },
    bornDate:{
        type:Number,
        required:false
    }
})


module.exports = mongoose.model('User', userSchema)