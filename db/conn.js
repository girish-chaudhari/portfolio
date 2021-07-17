const mongoose = require("mongoose");

// DB
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindeTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => console.log("something went wrong"));

  