const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Item = require('../models/Items');

router.get('/', (req, res) => 
    Item.findAll()
        .then(item => {
            console.log(item);
            res.sendStatus(200);
        })
        .catch(err => console.log(err))
);

module.exports = router;