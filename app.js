var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// var indexRouter = require("./routes/index");
var usersRouter = require("./routes/user/user");
const todoRouter = require('./routes/todo/todo')

const mongoose = require("mongoose"); //1-------------all the requirements added
const cors = require('cors')//mechanism to allow authorization for access

var app = express();

mongoose
  .connect("mongodb://localhost:27017/todo", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((data) => console.log("mongo connected at 4000"))
  .catch((e)=>console.log(e));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors())//global middleware

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));



// app.use("/", indexRouter);
app.use("/api/user", usersRouter);
app.use('/api/todo', todoRouter);// setting path for todo router
// app.use('/api/users/todo', ÷usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
