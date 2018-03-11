const express = require("express");
const hotelCtrl = require("../controllers/hotels");

const api = express.Router();

api.get("/hotel", hotelCtrl.getHotels);
api.get("/hotel/:hotelId", hotelCtrl.getHotelById);

module.exports = api;
