const Hotel = require("../models/hotel");

function getHotelById(req, res) {
  const hotelId = req.params.hotelId;
  Hotel.findById(hotelId, (err, hotel) => {
    if (err)
      return res.status(500).send({
        message: `Error making the request${err}`
      });
    if (!hotel)
      return res.status(404).send({
        message: `The hotel doesn't exist`
      });

    res.status(200).send({
      hotel
    });
  });
}

function getHotels(req, res) {
  Hotel.find({}, (err, hotels) => {
    if (err) {
      return res.status(500).send({
        message: `Error making the request${err}`
      });
    }
    if (!hotels) {
      return res.status(404).send({
        message: `The hotel doesn't exist`
      });
    }
    res.status(200).send({
      hotels
    });
  });
}

module.exports = {
  getHotelById,
  getHotels
};
