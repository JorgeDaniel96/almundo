const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HotelSchema = new Schema({
  id: String,
  name: String,
  stars: Number,
  price: Number,
  image: String,
  amenities: Array,
  latitude: Number,
  longitude: Number,
  address: String,
  hour: String
});

module.exports = mongoose.model("Hotels", HotelSchema);
