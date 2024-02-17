const jwt=require('jsonwebtoken');
const secret = 'alfabeta';

function jwtVerify(req,res,next){
const token=req.headers.authorization;


jwt.verify(token,secret,(error,payload)=>{
if(!token){
    return res.status(400).send({
        ok:false,
        message:"token no received"
    })
}
    //el token es incorrecto, tiene error debo cortar request y devolver una respuesta.
    if(error){
        return res.status(404).send({
            ok:false,
            message:"no tiene authorizacion"
        })
    }
     //el token correcto, debo continuar con la ejecucion de la peticion y agregar el payload a la respuesta.
     req.user=payload.user;

     next();
})


}
module.exports = jwtVerify;