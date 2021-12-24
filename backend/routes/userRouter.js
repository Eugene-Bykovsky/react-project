const Router = require('express')
const userController = require('../controllers/userController')
const router = new Router()

module.exports = router

router.post('/login', userController.getUser)

