const router = require('express').Router()
const passport = require('passport')
const {roleAdminMiddleware} = require('../middleware/role.middleware') 
const { upload } = require('../utils/multer')

require('../middleware/auth.middleware')(passport)

const userServices = require('./users.http')

router.route('/')
    .get(userServices.getAll)

router.route('/me')
    .get(passport.authenticate('jwt', {session: false}), userServices.getMyUser)
    .put(passport.authenticate('jwt', {session: false}), userServices.editMyUser)
    .delete(passport.authenticate('jwt', {session: false}), userServices.removeMyUser)

router.route('/me/profile-img')
    .post(passport.authenticate('jwt', {session: false}), upload.single('profile-img'), userServices.postProfileImg)

router.route('/:id')
    .get(userServices.getById)
    .delete(passport.authenticate('jwt', {session: false}), roleAdminMiddleware, userServices.remove)
    .put(passport.authenticate('jwt', {session: false}), roleAdminMiddleware, userServices.edit)

router.route('/:id/role')
    .get(userServices.getUserRole)

exports.router = router