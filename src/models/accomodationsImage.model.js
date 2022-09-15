const {DataTypes } = require('sequelize')
const { db } = require('../utils/database')

const AccomodationsImage = db.define('accomodations_img',{
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    accomodationId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'accomodation_id'
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isUrl: true
        }
    }
})

module.exports = AccomodationsImage