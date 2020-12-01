const mongoose = require("mongoose");
const Todo = require("./TodoModel");
// const TodoModel = require('./TodoModel')
console.clear()
module.exports = {
  createTodo: async (req, res) => {
    try {
      let newTodo = new Todo({ todo: req.body.todo });
      let saveTodo = await newTodo.save();
    } catch (e) {
      console.log(e);
    }
  },
  getTodo: async (req, res) => {
      console.clear()
    try {
        const all = await Todo.find()
        // console.log(all)
        // const allTodo = all.map((item)=>{
        //     console.log(item.todo)
        //    return res.json(item)
        // })
        res.json(all)
        
    } catch (e) {
        console.log(e)
    }
  },
};
