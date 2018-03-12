import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TouchableOpacity } from "react-native";
import App from "~/src/app/app";
import styles from "./styles";
import renderStarts from "../render-starts";

class HotelListsItem extends PureComponent {
  render() {
    const item = this.props.item;
    const params = {
      routeName: "HotelDetail",
      props: item
    };
    return (
      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={() => App.navigateTo(params)}
          style={[styles.cardContent, styles.shadow]}
        >
          <View style={styles.imageContainer}>
            <Image style={styles.hotelImage} source={{ uri: item.image }} />
          </View>
          <View style={styles.footerCard}>
            <View style={styles.leftFooterCard}>
              <Text numberOfLines={1} style={styles.hotelName}>
                {item.name}
              </Text>
              <View style={[styles.flexRow, styles.startsContainer]}>
                {renderStarts.render(item.stars)}
              </View>
            </View>
            <View style={styles.rightFooterCard}>
              <Text style={styles.pricePerNightText}>Price Per Night</Text>
              <View style={styles.flexRow}>
                <Text style={styles.priceText}>ARS {item.price}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

HotelListsItem.propTypes = {
  item: PropTypes.shape({
    price: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default HotelListsItem;
