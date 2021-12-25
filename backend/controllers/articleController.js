const Article = require('../models/Article')


class ArticleController {

    async getArticles(req, res) {
        try {
            const articles = await Article.find()
            return res.json(articles)
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так...' })
        }
    }

    async getOneArticle(req, res) {
        try {
            const article = await Article.findById(req.params.id)
            return res.json(article)
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    }
}

module.exports = new ArticleController()
