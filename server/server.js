const Poloniex = require('poloniex-api-node')
const wsuri = 'wss://api2.poloniex.com:443'
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

let poloniex = new Poloniex()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/api/tradeHistory', (req, res) => {
  const { market, date } = req.body
  poloniex.returnTradeHistory(market).then(history => res.json(history))
})
app.get('/api/currency_pairs', (req, res) => {
  poloniex.returnOrderBook('all', 0).then(markets => res.json(markets))
})
app.get('/api/tickers', (req, res) => {
  poloniex.returnTicker().then(ticker => res.json(ticker))
})
poloniex.on('open', () => {
  console.log(`Poloniex WebSocket connection open`)
})

poloniex.on('close', (reason, details) => {
  console.log(`Poloniex WebSocket connection disconnected`)
})

poloniex.on('error', error => {
  console.log(`An error has occured`)
})
poloniex.openWebSocket({ version: 2 })
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
