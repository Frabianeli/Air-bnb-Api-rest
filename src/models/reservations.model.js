const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");

const Reservations = db.define('reservations', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id'
    },
    arrival: {
        type:DataTypes.DATE,
        allowNull: false
    },
    departure: {
        type:DataTypes.DATE,
        allowNull: false
    },
    accommodationId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'accommodation_id'
    },
    adults: {
        type: DataTypes.INTEGER,
        allowNull: false,   
    },
    kids: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    babies: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    pets: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    score: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    },
    isFinished: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'is_finished'
    },
    isCanceled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'is_canceled'
    }
})

module.exports = Reservations