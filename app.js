const express = require('express')
const path = require('path');
const app = express()
app.use('/assets', express.static('assets'));
app.use('/vendor', express.static('vendor'));
const port = 8888;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.post('/email', (req, res) => {
    console.log("email")
    console.log(req.body)
})

app.listen(port, function () {
  console.log(`http://localhost:${port}`)
})