const Category=require("../models/category.model");

async function getCategories(req,res){
    try {
        
const categories=await Category.find();
        return res.send(categories);

    } catch (error) {
        console.log(error)
        res.status(500).send({
            ok:false,
            message:"Server error"
        })
        
    }
};

async function postCategories(req, res) {
    try {
        const newCategory = req.body;
        const category = new Category(newCategory);
        const categoryDB = await category.save();
        return res.status(200).send({
            ok: true,
            message: "Category created successfully",
            category: categoryDB
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            ok: false,
            message: "Server error"
        });
    }
}



module.exports = {
    getCategories,
    postCategories
}

