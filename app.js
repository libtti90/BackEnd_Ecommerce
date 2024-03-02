const express=require('express');
const app=express();
const cors=require('cors');
const userRoutes=require("./routes/user.routes")
const productRoutes=require("./routes/products.routes")
const categoryRoutes=require("./routes/category.route")



app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(productRoutes);
app.use(categoryRoutes);
app.use(userRoutes);





module.exports=app;

