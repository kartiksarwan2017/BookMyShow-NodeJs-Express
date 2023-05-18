const express = require('express');
const router = express.Router();

console.log('router loaded');

// https://localhost:5000/
router.get('/', (req, res) => {

    return res.json({ "Welcome": ` to my Backend Software for the Book My Show ` });

});

router.use('/', require('./users'));
router.use('/', require('./movies'));

module.exports = router;