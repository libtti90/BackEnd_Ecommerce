const app=require('./app');
const mongoose = require ('mongoose');




async function main(){
    try{
await mongoose.connect("mongodb+srv://libtti90:Geppetto9093!@ecommerce.pfrmhqp.mongodb.net/Ecommerce-Woodland")
console.log('conexion correcta ')

app.listen(3000, ()=>{
    console.log('server running at port 3000');
})
    }
    catch(error){
        console.log(error)
    }
}
main()

///