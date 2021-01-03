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

app.get('/topStatsApi/:year/:dataType/:statsType', apisController.getTopStats)
app.get('/standingsApi/:year/:season', apisController.getStandings)
app.get('/batterStatsApi/:year/:statsType/:sort', apisController.getBatterStats)
app.get('/pitcherStatsApi/:year/:statsType/:sort', apisController.getPitcherStats)
app.get('/teamBatterStatsApi/:year/:statsType/:sort', apisController.getTeamBatterStats)
app.get('/teamPitcherStatsApi/:year/:statsType/:sort', apisController.getTeamPitcherStats)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))