const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config");

mongoose.connect(config.db, err => {
  if (err) {
    return console.log(`Error conecting to the data base${err}`);
  }
  console.log("Connection to the established database");

  app.listen(config.port, () => {
    console.log(`Api rest runing on http://localhost:${config.port}`);
  });
});
