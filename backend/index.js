const express = require('express')
const router = require('./routes/index')
const cors = require('cors')
const PORT = process.env.PORT || 8080
const app = express()
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())
app.use('/', router)

app.get("/", function (req, res) {
    res.json({message: "Success!"});
});

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://eugeneBykovsky:passwordMongo@cluster0.yq96o.mongodb.net/study-react-project?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()
