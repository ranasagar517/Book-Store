// const app = require("express")();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const dotenv = require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/books", router);

//commonjs modulejs

app.use("/", (req, res, next) => {
  res.send("This is our starting app");
});

const port = process.env.PORT;

app.listen(port, async () => {
  console.log(`server started at port ${port}`);
  await mongoose
    .set("strictQuery", false)
    .connect(process.env.MONGODB_URI, (err) => {
      !err ? console.log(`db connected `) : console.error(err);
    });
});
