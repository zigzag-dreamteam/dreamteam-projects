const express = require('express');
const app = express()

app.post('/login', (req, res) => {
    let { email, password } = req.body
    let access_token = 'sdfsajbxjwh27681y28w81y'
    res.status(200).json(access_token)
})

app.post('/register', async (req, res) => {
    try {
        let { email, password } = req.body
        const user = await User.create({ email, password })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ messsage: 'internal server error' })
    }
})

app.post('/products', async (req, res) => {
    try {
        let { name, price, stock } = req.body
        let product = await Product.create({ name, price, stock })
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({ messsage: 'internal server error' })
    }
})

app.delete('/products/:id', async (req, res) => {
    try {
        await Product.destroy({ where: { id: req.params.id } })
        res.status(200).json({ message: 'product has been deleted' })
    } catch (error) {
        res.status(500).json({ messsage: 'internal server error' })
    }
})

app.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findOne({ where: { id: req.params.id } })
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ messsage: 'internal server error' })
    }
})

app.put('/products/:id', async (req, res) => {
    try {
        let { name, price, stock } = req.body
        await Product.update({ name, price, stock }, { where: { id: req.params.id } })
        res.status(201).json({ message: 'product has been updated' })
    } catch (error) {
        res.status(500).json({ messsage: 'internal server error' })
    }
})

app.listen(3000)
