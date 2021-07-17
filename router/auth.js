const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("../db/conn");
const User = require("../models/userSchema");

const authenticate = require("../middleware/authenticate")

router.get("/", (req, res) => {
  res.send("<h3>hello world this is the home page  router.</h3>");
});

// using promises.
// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "please filled the empty input" });
//   }
//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "email allready exist" });
//       }

//       const user = new User({ name, email, phone, work, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "user registered successfully" });
//         })
//         .catch((err) => res.status(500).json({ error: "Failed to Register." }));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// using async and await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "please filled the empty input" });
  }
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "email allready exist" });
    } else if (password != cpassword) {
      return res.status(422).json({
        error: "password are not matching please check your password",
      });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      // securing password

      const userRegister = await user.save();
      if (userRegister) {
        res.status(201).json({ message: "user registered successfully" });
      } else {
        res.status(500).json({ error: "Failed to Register." });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

// login route

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  // res.json(req.body);
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "Please input the filled" });
    }

    const userLogin = await User.findOne({ email: email });

    // console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      // res.json({ message: "sorry this user is no more has this email...." });

      const token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 2592000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid credential " });
      } else {
        res.json({ message: "user Signin Successfully" });
      }
    } else {
      res.json({ message: "user Signin Successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// about page middlewear

router.get("/about", authenticate, (req, res) => {
  console.log("hello my About page");
  
  
  // res.cookie("jwtoken", "girish");
  res.send(req.rootUser);
});

module.exports = router;
