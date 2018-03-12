const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config");
const jsonData = require("./data.json");
const hotelCtrl = require("./controllers/hotels");

mongoose.connect(config.db, err => {
  if (err) {
    return console.log(`Error conecting to the data base${err}`);
  }
  console.log("Connection to the established database");
  hotelCtrl.saveInitialData(jsonData.hotels);
  app.listen(config.port, () => {
    console.log(`Api rest runing on http://localhost:${config.port}`);
  });
});
