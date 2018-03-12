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

function saveInitialData(data) {
  Hotel.remove({}, err => {
    if (err) return console.log(err);
    console.log("Clean Data!!!");
  });

  data.map(hotel => {
    const hotelToSave = new Hotel(hotel);
    return hotelToSave.save(err => {
      if (err) return console.log(err);
      console.log("Data Saved");
    });
  });
}

module.exports = {
  getHotelById,
  getHotels,
  saveInitialData
};
