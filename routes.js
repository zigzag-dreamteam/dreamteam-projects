const router = require('express').Router();

router.post('/register', async (req, res) => {
    try {
        let { email, password } = req.body
        const user = await User.create({ email, password })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ messsage: 'internal server error' })
    }
})

module.exports = router
