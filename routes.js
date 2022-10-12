const express = require('express');
const router = express.Router();

//create a post request with body
router.get('/DocToPdf', function(req, res) {
    let data = req.body;
    console.log(data);
});

module.exports = router