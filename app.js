const express = require('express');
const app = express()

app.post('/login', (req, res) => {
    let { email, password } = req.body
    let access_token = 'sdfsajbxjwh27681y28w81y'
    res.status(200).json(access_token)
})

app.delete('/products/:id', async (req, res) => {
    try {
        await Product.destroy({ where: { id: req.params.id } })
        res.status(200).json({ message: 'product has been deleted' })
    } catch (error) {
        res.status(500).json({ messsage: 'internal server error' })
    }
})

app.listen(3000)
