const multer=require("multer");

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images/users')
    },

    filename:(req, file, cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const uploadMulter=multer({
    storage:storage,
})
const uploadUser=uploadMulter.single("image");

module.exports=uploadUser;