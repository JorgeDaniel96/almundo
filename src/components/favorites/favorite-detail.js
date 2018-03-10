import React, { PureComponent } from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const hotelImage = require("~/assets/images/hotel.jpg");
const startIcon = require("~/assets/images/iconFavorite.png");

class FavoriteDetail extends PureComponent {
  // eslint-disable-next-line
  renderStars(starts) {
    const arrayStart = [];
    let i = 0;
    for (i; i <= starts; i++) {
      arrayStart.push(<Image style={styles.startIcon} source={startIcon} />);
    }
    return arrayStart;
  }

  render() {
    const hotel = this.props.hotelDetail;
    return (
      <View style={styles.favoriteDetailContainer}>
        <Text style={styles.fontTitle}>{hotel.name}</Text>
        <View style={styles.flexRow}>{this.renderStars(hotel.stars)}</View>
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
          <Text style={[styles.fontTitle, styles.amenitieText]}>Amenitie</Text>
          {hotel.amenities.map(amenitie => (
            <Text style={styles.amenitie}>{amenitie}</Text>
          ))}
        </View>
        <View style={styles.addressTextContainer}>
          <Text style={styles.fontTitle}>Address</Text>
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
    amenities: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired
};

export default FavoriteDetail;
