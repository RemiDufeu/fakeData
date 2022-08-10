const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/reglages', (req, res) => {
    let state = {
        "power": true,
        "level": 0.5,
        "currentMode": "COSY",
        "modes": [
            {"name": "COSY", "streaming": false, "color" : ["rgb(255, 0, 0)"]},
            {"name": "COLOR", "streaming": false, "color" : ["rgb(180, 0, 90)"]}
        ]
    }
  res.send(state)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
