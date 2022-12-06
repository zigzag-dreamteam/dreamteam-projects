const express = require('express');
const app = express()

app.post('/login', (req, res) => {
    let { email, password } = req.body
    let access_token = 'sdfsajbxjwh27681y28w81y'
    res.status(200).json(access_token)
})

app.listen(3000)
