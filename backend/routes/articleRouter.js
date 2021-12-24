const Router = require('express')
const router = new Router()
const articleController = require('../controllers/articleController')

router.get('/', articleController.getArticles)
router.get('/:id', articleController.getOneArticle)
module.exports = router
