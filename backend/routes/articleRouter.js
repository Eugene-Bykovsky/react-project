const Router = require('express')
const router = new Router()
const articleController = require('../controllers/articleController')

router.get('/', articleController.getArticles)
router.get('/:id', articleController.getOneArticle)
router.post('/create', articleController.createNewArticle)
module.exports = router
