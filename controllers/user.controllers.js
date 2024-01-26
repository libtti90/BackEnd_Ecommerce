const User = require('../models/user.model')
const bcrypt=require('bcrypt')
const saltRounds = 10;



//obtener usuarios funcion


async function getUser(req, res) {

    try {
        const id = req.params.id;
        if (id) {
            const user = await User.findById(id)

            if (!user)
                return res.status(404).send({
                    ok: false,
                    message: "User not found"
                })
                user.password=undefined;
            return res.send({
                ok:true,
                user,
                message:'User found'
            })
        }

        const users = await User.find()
        res.send({
            ok:true,
            users,
            message:"Users found"

        })



    } catch (error) {
        console.log(error)
        res.send({
            message: "Error obtaining users",
            ok: false
        })
    }
};



//funcion create usuario
async function createUser(req, res) {
    try {
        const user = new User(req.body);

        user.password = await bcrypt.hash(user.password, saltRounds)
        
        
        console.log(user)

        const userSaved=await user.save()

        userSaved.password=undefined

        console.log(userSaved)



        res.status(201).send({
            ok:true,
            message:'New user created',
            user:userSaved
        })

    } catch (error) {
        res.status(500).send(error)
    }
};





//delete 
async function deleteUser(req, res) {


    try {
        console.log(req.params.idUser)
        const id = req.params.idUser
        const userDeleted = await User.findByIdAndDelete(id)
        res.send({
            ok: true,
            message: "User deleted",
            user: userDeleted
        })
    } catch (error) {
        console.log(error)

    }



};



//edit

async function editUser(req, res) {
    try {

        const id = req.params.id;
        const nuevosValores = req.body;


        const userUpdated = await User.findByIdAndUpdate(id, nuevosValores, { new: true });



        res.send({
            ok: true,
            message: "Usuario actualizado exitosamente",
            user: userUpdated
        });
    } catch (error) {

        console.log(error);


        res.send({
            ok: false,
            message: "Usuario no actualizado"
        });
    }
}


//exporto
module.exports = {
    createUser,
    deleteUser,
    getUser,
    editUser,
}






