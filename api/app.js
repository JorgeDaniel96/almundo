const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const api = require("./routes");

app.use(bodyParser.json());
app.use("/api", api);

// app.get("/hotels/:id", (req, res) => {
//   res.send({
//     message: `Hola ${req.params.name}!`
//   });
// });

module.exports = app;
