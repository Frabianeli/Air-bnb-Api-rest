const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");

const Places = db.define('places', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID
    },
    city: {
        allowNull: false,
        type: DataTypes.STRING
    },
    state: {
        allowNull: false,
        type: DataTypes.STRING
    },
    country: {
        allowNull: false,
        type: DataTypes.STRING
    },
    continent: {
        allowNull: false,
        type: DataTypes.STRING
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

module.exports = Places