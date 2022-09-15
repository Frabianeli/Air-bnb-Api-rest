const router = require('express').Router()
const passport = require('passport')

const accommodationServices = require('./accommodations.http')
const reservationServices = require('../reservations/reservations.http')
const {roleAdminMiddleware} = require('../middleware/role.middleware')

require('../middleware/auth.middleware')(passport)


router.route('/')
    .get(accommodationServices.getAll)

router.route('/me')
    .get(passport.authenticate('jwt',{session: false}), accommodationServices.getAllMy) 

router.route('/me/:id')
    .get(passport.authenticate('jwt',{session: false}), accommodationServices.getMyById)
    .put(passport.authenticate('jwt',{session: false}), accommodationServices.edit) 
    .delete(passport.authenticate('jwt',{session: false}), accommodationServices.remove)
    
router.route('/:id/reservation')
    .post(passport.authenticate('jwt',{session: false}), reservationServices.create)
    
router.route('/:id')
    .get(accommodationServices.getById)
    .delete(passport.authenticate('jwt',{session: false}), roleAdminMiddleware, accommodationServices.remove)
    .put(passport.authenticate('jwt',{session: false}), roleAdminMiddleware ,accommodationServices.edit)


module.exports= {
    router
}