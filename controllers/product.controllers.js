const Product = require('../models/product.model')
const bcrypt = require('bcrypt')
const saltRounds = 10;
var jwt = require('jsonwebtoken');
var secret = 'alfabeta';

async function getProduct(req, res) {

    try {
        const id = req.params.id;
        if (id) {
            const product = await Product.findById(id)
            
            

            if (!product)
                return res.status(404).send({
                    ok: false,
                    message: "Product not found"
                })
                
                return res.send({
                    ok:true,
                    product,
                    message:'Product found'
                })
        }

        const products = await Product.find();
        res.send({
            ok:true,
            products,
            message:"products found"

        })



    } catch (error) {
        console.log(error)
        res.send({
            message: "Error obtaining products",
            ok: false
        })
    }
};

async function createProduct(req, res) {
   
    try {
       
        
        const product = new Product(req.body);
        if(req.file?.filename){
            product.image=req.file.filename
            
        }
        
        const productSaved=await product.save()
        




        res.status(201).send({
            ok:true,
            message:'New product created',
            user:productSaved
        })

    } catch (error) {
        res.status(500).send(error)
    }


};

async function deleteProduct(req,res){
    try {
        if (req.user.role !== "ADMIN_USER") {
            return res.status(403).send({
                ok:false,
                message:"You don't have permission to delete products"
            });
   
          }
        const id=req.params.idProduct
        
        const productDeleted=await Product.findByIdAndDelete(id);
        
        res.send({
            ok:true,
            message:"Product deleted successfully",
            product:productDeleted
        })
    } catch (error) {
        console.log("error")
        return res.status(500).send({
            ok:false,
            message:"Failed to delete products"
        })
    }
    
}

async function editProduct(req, res) {
    try { 
        if(req.user.role !== "ADMIN_USER"){
            return res.status(403).send({ok:false,
            message:"You don't have permission to edit products"});
        }
             
       
        const id = req.params.id;
        const newValues = req.body;  


        const productUpdated = await Product.findByIdAndUpdate(id, newValues, { new: true });
        

        
        res.send({
            ok: true,
            message: "Product updated",
            user: productUpdated
        });

    } catch (error) {
        
        console.log(error);


        res.send({
            ok: false,
            message: "Product no updated"
        });
    }
}


module.exports = {
    createProduct,
    deleteProduct,
    editProduct,
    getProduct
}