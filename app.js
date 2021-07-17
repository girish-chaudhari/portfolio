const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

app.use(cors());

dotenv.config({ path: "./.env" });

require("./db/conn");
// const User = require("./models/userSchema")

app.use(express.json());

// this is the link router file.
app.use(require("./router/auth"));

const PORT = process.env.PORT;

// Middleware

// const middleware = (req, res, next) => {
//   console.log("Hello my meddlewear");
//   next();
// };

// app.get("/", (req, res) => {
//   res.send("hello world");
// });
// app.get("/about", middleware, (req, res) => {
//   // res.cookie("jwtoken", "girish");
//   res.send("hello world This is about Page");
// });
app.get("/contact", (req, res) => {
  res.send("hello world This is contact Page");
});
// app.get("/signin", (req, res) => {
//   res.send("hello world This is signin Page");
// });
// app.get("/singup", (req, res) => {
//   res.send("hello world This is singup Page");
// });

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"))
}

app.listen(PORT, () => {
  console.log(
    "this is the localhost and this host is start on http://127.0.0.1:5000 click on the link"
  );
});
