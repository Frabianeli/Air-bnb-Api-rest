const { DataTypes } = require('sequelize')
const { db } = require('../utils/database')

const Accommodations = db.define('accommodations', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    guests: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rooms: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    beds: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bathrooms: {
        type: DataTypes.FLOAT, 
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    hostId: {
        allowNull: false,
        type: DataTypes.UUID,
        field: "userId"
    },
    score: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    placeId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'places_id'
    },
    commision: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        field: 'is_active'
    }
})

module.exports = Accommodations