var express = require('express');
var router = express.Router();
// const {createTodo} = require('./todo/TodoController')
console.clear()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('./create-todo', createTodo)

module.exports = router;
