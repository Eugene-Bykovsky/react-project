const Router = require('express')
const router = new Router()
const articleController = require('../controllers/articleController')

router.get('/', articleController.getArticles)
router.get('/:id', articleController.getOneArticle)
router.post('/', articleController.addArticle)
router.delete('/:id', articleController.deleteArticle)
module.exports = router
