const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const apisController = require('./controllers/api')

app.get('/standingsApi', apisController.getStandings)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))