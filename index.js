const express = require('express')
const app = express()
app.use(express.json())

const port = process.env.PORT || 3000

let state = {
  "power": false,
  "level": 0.5,
  "currentMode": "COSY",
  "modes": [
      {"name": "COSY", "streaming": false, "color" : ["rgb(255, 0, 0)"]},
      {"name": "COLOR", "streaming": false, "color" : ["rgb(180, 0, 90)"]}
  ]
}

app.get('/reglages', (req, res) => {
    
  res.send(state)
})

app.post('/reglages/power', (req, res) => {
  state.power = !state.power;
  res.send(state)
})

app.post('/reglages/level', (req, res) => {
  state.level = req.body.level;
  res.send(state)
})

app.post('/reglages/mode', (req, res) => {
  state.currentMode = req.body.currentMode;
  res.send(state)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
