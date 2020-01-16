require('dotenv').config()

const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 4000
const app = express()

app.use(express.static('client/build'))
app.use(express.json())
app.use(cors())

app.get('/greeting', (req, res) => {
  res.json(`Hey! how are you, ${req.query.name}?`)
})

app.use((req, res) => {
  res.json('the API is alive')
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})