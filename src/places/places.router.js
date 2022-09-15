const router = require('express').Router()
const passport = require('passport')

const placesServices = require('./places.http')
require('../middleware/auth.middleware')(passport)

const accommodationsServices = require("../accommodations/accommodations.http")

router.route('/')
    .get(placesServices.getAll)
    
router.route('/:id/create-accommodation')
    .post(passport.authenticate('jwt',{session: false}), accommodationsServices.create)
    
router.route('/:id')
    .get(placesServices.getById)


module.exports = {
    router
}