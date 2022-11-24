const uuid = require('uuid')
const {hashPassword} = require('../utils/crypt')

const Users = require('../models/user.model')
const Roles = require('../models/roles.model')

const getAllUsers = async () => {

    const data = await Users.findAll({
      attributes: {
        exclude: ['password', 'createdAt', 'updatedAt', 'roleId']
      }
    })
    return data
  };


const getUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id
        },
        attributes: {
            exclude: ["password", "createdAt", "updatedAt", "roleId"]
        }
    })
    return data
}

const createUser = async (data) => {
    const newUser = await Users.create({
        id: uuid.v4(),
        firstName: data.first_name,
        lastName: data.last_name,
        gender: data.gender,
        email: data.email,
        password: hashPassword(data.password),
        phone: data.phone,
        birthdayDate: data.birthday_date,
        dni: data.dni,
        roleId: "fef3a08d-2cec-4728-9745-7cbd2b37e557",
        address: data.address,
        profileImage: data.profile_image,
        country: data.country,
        status: "active",
        verified: false,
    })
    return newUser
}

const editUser = async (data, userId, userRol) => {
    const {id, password, verified, roleId, ...newData} = data
    if(userRol === '5ee551ed-7bf4-44b0-aeb5-daaa824b9473'){
        const response = await Users.update(
            {...newData, roleId},
            {where: { id: userId } }
        )
        console.log(response)
        return response
    } else {
        const response = await Users.update(
            {...newData},
            {where: { id: userId } }
            //...newData, {where: { id: userId }}
        )
        return response
    }
}

const deleteUser = async (id) => {
    const data = await Users.destroy({
        where: {
            id: id
        }
    })
    return data
}

const getUserByEmail = async(email) =>{
    const data = await Users.findOne({
        where: { email },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
    return data
}

const editProfileImg = async (userID, imgUrl) => {
    const data = await Users.update(
      {
        profileImage: imgUrl,
      },
      {
        where: { id: userID },
      }
    );
    return data;
  };

const getUserWithRole = async(userId) => {
    const data = await Users.findOne({
        where: {
            id: userId
        },
        include: {
            model: Roles,
            as: 'role',
            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt']
            }
        },
        attributes: {
            exclude: ['roleId', 'createdAt', 'updatedAt', 'password']
        }
    })
    return data
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    editUser,
    deleteUser,
    getUserByEmail,
    editProfileImg,
    getUserWithRole
}
