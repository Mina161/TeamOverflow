var express = require('express');
var router = express.Router();

/* GET instructors listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

/* Functions */

module.exports = router;