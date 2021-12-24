const User = require('../models/User')

class UserController {
    async getUser(req, res) {
        try {
            const { login, password } = req.body
            const user = await User.findOne({ login, password })
            return res.json(user.login)
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так...' })
        }
    }
}

module.exports = new UserController()
