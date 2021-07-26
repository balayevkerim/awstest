const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send("Hello World");
  next();
});

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  console.log("Server started");
  if (err) {
    console.log(err);
  }
});
