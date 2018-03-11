import React, { PureComponent } from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import RenderStarts from "../render-starts";

const hotelImage = require("~/assets/images/hotel.jpg");

class FavoriteDetail extends PureComponent {
  render() {
    const hotel = this.props.hotelDetail;
    return (
      <View style={styles.favoriteDetailContainer}>
        <Text style={[styles.fontTitle, styles.textCenter]}>{hotel.name}</Text>
        <View style={styles.flexRow}>{RenderStarts.render(hotel.stars)}</View>
        <View style={styles.hotelImageContainer}>
          <Image style={styles.hotelImage} source={hotelImage} />
          <View style={styles.priceContainer}>
            <Text style={styles.pricePerNightText}>Price Per Night - </Text>
            <View style={styles.flexRow}>
              <Text style={styles.priceText}>ARS {hotel.price}</Text>
            </View>
          </View>
        </View>

        <View style={styles.amenitiesContainer}>
          <Text style={[styles.fontTitle, styles.marginBottom]}>Amenitie</Text>
          {hotel.amenities.map(amenitie => (
            <Text style={styles.amenitie}>{amenitie}</Text>
          ))}
        </View>
        <View style={styles.addressTextContainer}>
          <Text style={[styles.fontTitle, styles.marginBottom]}>Address</Text>
          <Text> {hotel.address}</Text>
        </View>
      </View>
    );
  }
}

FavoriteDetail.propTypes = {
  hotelDetail: PropTypes.shape({
    name: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    amenities: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default FavoriteDetail;
