const userControllers = require('./users.controllers')

const getAll = (req, res) => {
    userControllers.getAllUsers()
      .then((response) => {
        res.status(200).json({ items: response.length, users: response });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };



const getById = (req, res) => {
    const id = req.params.id
    userControllers.getUserById(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(404).json({message: `El usuario con el id ${id} no existe`})
        })
}

const register = (req, res) => {
    const body = req.body
    if(!body){
        return res.status(400).json({message: 'Missing Data'})
    }else if(
        !body.first_name ||  
        !body.last_name ||  
        !body.email ||
        !body.password ||
        !body.birthday_date || 
        !body.country ||
        !body.phone ||
        !body.gender
    ){
      return res.status(400).json({
        message: 'All fields must be completed',
        fields:{
            first_name : 'string',   
            last_name:  'string', 
            email: 'example@example.com',
            password: 'string',
            birthday_date:  'DD/MM/YYYY',
            country: 'string',
            phone: 99898,
            gender: 'string'
            }
        })
     } else {
        userControllers.createUser(body)
            .then(response => {
                res.status(201).json({
                    message: `User created succesfully with id : ${response.id}`,
                    user: response
                })
            })
            .catch(err => {
               res.status(400).json({message: err.errors[0].message})
            })
     }
}

const remove = (req, res) => {
    const id = req.params.id
    userControllers.deleteUser(id)
        .then(response => {
            if(response){
                res.status(204).json()
            } else {
                return res.status(400).json({message: 'Invalid ID'})
            }
        })
}

const edit = (req, res) => {
    const id = req.params.id
    const body = req.body
    if(!Object.keys(body).length){
        return res.status(400).json({message: 'Mssing Data'})
    } else if (
        !body.first_name ||  
        !body.last_name ||  
        !body.email ||
        !body.password ||
        !body.phone ||
        !body.rol ||
        !body.profile_image ||
        !body.birthday_date || 
        !body.country ||
        !body.is_active
    )
    {
        return res.status(400).json({
            message: 'All fields must be completed',
            fields:{
                first_name : 'string',   
                last_name:  'string', 
                email: 'example@example.com',
                password: 'string',
                phone: '+51123456789',
                rol: 'normal',
                profile_image: 'example.com/img/example.png',
                birthday_date:  'DD/MM/YYYY',
                country: 'string',
                is_active: true
                }
            })
      } else {
       userControllers.editUser(body, id, req.user.rol)
        .then(response => {
            res.status(200).json({
                message: 'User edited successfully'
            })
        })
        .catch((err) => {
            res.status(400).json({message: err})
        })
      }
}

const editMyUser = (req, res) => {
    const id = req.user.id
    const body = req.body
    if(!Object.keys(body).length){
        return res.status(400).json({message: 'Mssing Data'})
    } else if (
        !body.first_name ||  
        !body.last_name ||  
        !body.email ||
        !body.phone ||
        !body.profile_image ||
        !body.birthday_date || 
        !body.country ||
        !body.is_active
    )
    {
        return res.status(400).json({
            message: 'All fields must be completed',
            fields:{
                first_name : 'string',   
                last_name:  'string', 
                email: 'example@example.com',
                phone: '+51123456789',
                profile_image: 'example.com/img/example.png',
                birthday_date:  'DD/MM/YYYY',
                country: 'string',
                is_active: true
                }
            })
      } else {
        userControllers.editUser(body, id, req.user.rol)
            .then(response => {
                res.status(200).json({
                    message: 'User edited succesfully',
                    user: response
                })
            })
            .catch((err) => {
                res.status(400).json({message: err.errors[0].message})
            })
      }
}

const getMyUser = (req, res) => {
    const id = req.user.id
    userControllers.getUserById(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json({message: err.errors[0].message})
        })
}

const removeMyUser = (req, res) => {
    const id = req.user.id
    userControllers.deleteUser(id)
        .then(response => {
            res.status(204).json();
        })
        .catch(err => {
            res.status(400).json({message: err.errors[0].message});
        })
}

const postProfileImg = (req, res) => {
    const userId = req.user.id
    const imgPath = req.hostname +':8000' + '/api/v1/uploads/' + req.file.filename
    userControllers.editProfileImg(userId, imgPath)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json({message: err.errors[0].message})
        })
}

const getUserRole = (req, res) => {
    const id = req.params.id
    userControllers.getUserWithRole(id)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json({status: 400, message: err.message})
        })
}

module.exports = {
    getAll,
    getById,
    register,
    remove,
    edit,
    editMyUser,
    getMyUser,
    removeMyUser,
    postProfileImg,
    getUserRole
}
