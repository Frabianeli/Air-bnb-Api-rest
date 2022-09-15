const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");

const UsersImg = db.define('users_img', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        },
    },
    userId :{
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id'
    }
});

module.exports = UsersImg;