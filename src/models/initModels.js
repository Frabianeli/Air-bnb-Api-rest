const Users = require('./user.model')
const Roles = require('./roles.model')

const Reservations = require('./reservations.model')
const Accomodations = require('./accommodations.model')

const AccomodationsImage = require('./accomodationsImage.model')
const Places = require('./places.model')

const UsersImg = require('./usersImg.model')

const initModels = () => {
    // Users -> Roles

    // belongsTo
    // belongsToMany
    // hasOne
    // hasMany
    Roles.hasMany(Users);
    Users.belongsTo(Roles)

    Places.hasMany(Accomodations)
    Accomodations.belongsTo(Places)

    Users.hasMany(Accomodations)
    Accomodations.belongsTo(Users)

    Users.belongsToMany(Accomodations, { through : Reservations })
    Accomodations.belongsToMany(Users, { through: Reservations })

    Users.hasMany(UsersImg)
    UsersImg.belongsTo(Users)

    Accomodations.hasMany(AccomodationsImage)
    AccomodationsImage.belongsTo(Accomodations)

}

module.exports = initModels