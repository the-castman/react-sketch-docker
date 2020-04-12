const express = require('express');
const router = express.Router();

router.get('/sayhello', (req, res) => {
    return res.json({ foo: 'bar' });
});

module.exports = router;