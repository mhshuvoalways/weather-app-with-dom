require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.static('public'))
app.use(express.json())

app.use('/history', require('./histotyRoute'))

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
)
const db = mongoose.connection
db.on('error', (err) => {
    console.log(err)
})
db.once("open", () => {
    console.log("Database connect Estabished")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})