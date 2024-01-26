const express=require('express');
const app=express();
const userRoutes=require("./routes/user.routes")
const productRoutes=require("./routes/products.routes")


app.use(express.json());

app.use(productRoutes);

app.use(userRoutes)

module.exports=app;

