const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const saltRounds = 10;
var jwt = require('jsonwebtoken');
var secret = 'alfabeta';



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
            user.password = undefined;
            return res.send({
                ok: true,
                user,
                message: 'User found'
            })
        }

        const users = await User.find()
        .select({password:0, _v:0})
        res.send({
            ok: true,
            users,
            message: "Users found"

        });



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
        if(req.file?.filename){
            user.image=req.file.filename
        }

        user.password = await  bcrypt.hash(user.password, saltRounds);

      
        const userSaved = await user.save();

        userSaved.password=undefined

        console.log(userSaved)


        res.status(201).send({
        
            ok: true,
            message: "Usuario created",
            user: userSaved
        
        })

    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
};





//delete 
async function deleteUser(req, res) {

console.log(req.user.role);
    try {
        if (req.user.role !== "ADMIN_USER") {
            return res.status(403).send({
                ok:false,
                message:"You don't have permission to delete users"
            });
   
          }
        const id = req.params.idUser;
        
          
        const userDeleted = await User.findByIdAndDelete(id);


        if(!userDeleted){
            return res.status(404).send({
                ok:false,
                message:"User not found"
            })
        }
        res.send({
            ok: true,
            message: "User deleted",
            user: userDeleted
        });
    } 
    
    catch (error) {
        console.log(error)

    }



};



//edit

async function editUser(req, res) {
    try {
        if (req.user.role !== "ADMIN_USER") {
            return res.status(403).send({
                ok:false,
                message:"You don't have permission to delete users"
            });
   
          }

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
};

//LOGIN
async function login(req, res) {
    try {
        
const { password, email } = req.body;

        if (!password || !email) {
            return res.status(400).send({
                ok: false,
                message: "Information is missing"
            })
        }
 const user = await User.findOne({ email: email.toLowerCase() })

     if (!user) {
            return res.status(404).send({
                ok: false,
                message: "Information is missing"
            });
        }

const passwordToCheck = await bcrypt.compare(password, user?.password)

        if (!passwordToCheck) {
            return res.status(404).send({
                ok: false,
                message: "Information is missing"
            });
        }
        user.password = undefined;

        const token=jwt.sign({ user },secret);

        res.send({
            ok: true,
            message: "Login successful",
            user,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            ok: false,
            message: "Login unsuccessful"
        })
    }
}

//exporto
module.exports = {
    createUser,
    deleteUser,
    getUser,
    editUser,
    login
}






