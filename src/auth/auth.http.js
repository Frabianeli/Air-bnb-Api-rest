const jwt = require('jsonwebtoken')
const authControllers = require('./auth.controllers')

const login = (req, res) =>{
    const body = req.body
    if(!body.email || !body.password){
        return res.status(400).json({message: 'Missing data'})
    } 

    authControllers.loginUser(body.email, body.password)
        .then((response) => {
            if(response.email){
                const token = jwt.sign({
                    id: response.id,
                    email: response.email,
                    rol: response.roleId
                }, 'academlo')
                return res.status(200).json({message: 'Tus credenciales son correctas', user: token})
            } else {
                return res.status(401).json({message: 'Invalid credentials'})
            }
        })
        .catch((error) => {
            return res.status(401).json({status: 400, message: error.message})
        })
}

module.exports = {
    login
}