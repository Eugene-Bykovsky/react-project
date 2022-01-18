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

    async createArticle(req, res) {
        try {
            const { title, imageSrc, description, text, categories } = req.body
            const article = new Article({ title, imageSrc, description, text, categories })
            await article.save()
            res.status(201).json({ message: 'Статья создана' })
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    }

    async deleteArticle(req, res) {
        try {
            const { id } = req.body
            await Article.deleteOne({ _id: id });
            res.status(201).json({ message: 'Статья удалена' })
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    }
}

module.exports = new ArticleController()
