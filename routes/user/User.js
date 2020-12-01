var express = require('express');
var router = express.Router();

const {createUser, loginUser} = require('./userController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create-user', createUser);

router.post('/logged-in', loginUser)



module.exports = router;
