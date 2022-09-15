/*
    {
        id: '76133o21n3p21dNDOdOno1n2o1',  
        first_name: "Rene",
        last_name: "Izacupe Coello",
        email: "rene@academlo.com",
        password: hashPassword('root', 10),
        phone: 947559709,
        birthday_date: "31/10/2000",
        rol: "normal",   
        profile_image: "url",
        country: "Perú",
        is_active: true,
        verified: false 
    }
 */

const {DataTypes} = require('sequelize')

const {db} = require('../utils/database')

const Users = db.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    firstName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'first_name'
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'last_name'
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING(30),
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
     },
     phone: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    birthdayDate:{
        allowNull: false,
        type: DataTypes.DATEONLY,
        field: 'birthday_Date'
    },
    dni: {
        type: DataTypes.STRING,
    },
    roleId: {
        allowNull: false,
        type: DataTypes.UUID,
        field: 'role_id'
    },
    address : {
        type: DataTypes.STRING
    },
    profileImage: {
        type: DataTypes.STRING,
        field: 'profile_image'
    },
    country: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    status: {
        allowNull: false,
        type: DataTypes.STRING ,
        defaultValue: 'active' // active, non-active, deleted, suspended
    },
    verified: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "created_at",
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "updated_at",
    }
})

module.exports = Users