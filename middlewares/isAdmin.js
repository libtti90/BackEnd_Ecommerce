function isAdmin(req,res,next){
if(req.user.role !== "ADMIN_USER"){
    return res.status(403).send({
        ok:false,
        message:"You do not have permission to perform this action."

    })
}
next();
}
module.exports=isAdmin;