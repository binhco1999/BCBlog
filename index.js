const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => res.send('hello world'))

app.listen(port, () => console.log(`Starting nodejs listening at http://localhost:${port}`))