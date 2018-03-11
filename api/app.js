const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const api = require("./routes");

app.use(bodyParser.json());
app.use("/api", api);

app.get("/hotels", (req, res) => {
  res.send({
    message: `Params ${req.params}!`
  });
});

module.exports = app;
