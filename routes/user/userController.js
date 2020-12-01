const User = require("./UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

console.clear();
module.exports = {

  createUser: async (req, res) => {


    try {
      let createUser = new User({
        email: req.body.email,
        // password: req.body.password,
        //_id with unique value will be automatically created
      });
      //create hash password
      const genSalt = await bcrypt.genSalt(12);
      let hashedPassword = await bcrypt.hash(req.body.password, genSalt);

      createUser.password = hashedPassword;

      await createUser.save();

      res.json({message:'user created'});

        console.log(createUser);
    } catch (e) {
      //   console.log(e)
      if (e.code === 11000) {
        res.status(409).json({ message: "email already exist" });
      } else {
        res.status(500).json({ message: "something went wrong" });
      }
    }
  },

  loginUser: async (req, res) => {
      console.clear()
      
      try {
        let foundEmail = await User.findOne({ email: req.body.email });
      if (!foundEmail) {
        throw { message: "no such email" };
      } else {
        let comparePassword = await bcrypt.compare(
          req.body.password,
          foundEmail.password
        );
        console.log(req.body)//-------------------------req.body
        console.log(comparePassword);//////////////////true of false
        if (!comparePassword) {
          throw { message: "no such password" };
        }
        console.log(foundEmail)//------------------------------found email
        const token = jwt.sign(
          { email: foundEmail.email, _id: foundEmail._id },'blue',
          { expiresIn: "2hr" }
        );
        res.json({token})
        console.log('token',token);//////not working why????????????????????
      }
    } catch (error) {
      console.log('error',error);
    }
    console.log("--------------------------");


    
  },
};
