const {getUserByEmail} = require('../users/users.controllers')
const { comparePassword } = require('../utils/crypt')


const loginUser = async (email, password) => {
    try {
        const user = await getUserByEmail(email)
        const verify_password = comparePassword(password, user.password)
        if(verify_password){
            return user
        } else {
            return false
        }
    } catch (error) {
        return false
    }

}

module.exports = {
    loginUser
}