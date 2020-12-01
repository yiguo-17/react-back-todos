const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, required: true },
  // todo:[{
  //     type:mongoose.Schema.ObjectId, ref:'Todo'
  // }]
});

module.exports = mongoose.model("user", UserSchema);
