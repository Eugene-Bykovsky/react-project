const Router = require('express')
const router = new Router()
const articleRouter = require('./articleRouter')
const userRouter = require('./userRouter')
router.use('/article', articleRouter)
router.use('/user', userRouter)

module.exports = router
