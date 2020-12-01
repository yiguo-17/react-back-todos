var express = require('express');
var router = express.Router();
const {createTodo, getTodo}=require('./TodoController')

console.clear()
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/create-todo', createTodo)
// router.post()
router.get('/get-todo',getTodo);

module.exports = router;
