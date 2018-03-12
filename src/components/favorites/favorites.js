import React, { PureComponent } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import App from "~/src/app/app";
import FavoriteDetail from "./favorite-detail";
import styles from "./styles";

const imgEmpty = require("~/assets/images/imgEmpty.png");
const iconInfo = require("~/assets/images/iconInfo.png");

class Favorites extends PureComponent {
  showDetailInModal(hotel) {
    App.navigateTo({
      routeName: "Modal",
      props: {
        children: <FavoriteDetail hotelDetail={hotel} />
      }
    });
  }

  renderFavoriteCard(hotel) {
    return (
      <View key={hotel.id} style={styles.favoriteCardContainer}>
        <TouchableOpacity
          onPress={() => this.showDetailInModal(hotel)}
          style={[styles.favoriteCartContent, styles.shadow]}
        >
          <Text style={styles.fontTitle}>{hotel.name}</Text>
          <Image source={iconInfo} />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const hotels = Object.values(this.props.hotels);
    return (
      <View>
        {hotels.length > 0 ? (
          <ScrollView>
            {hotels.map(hotel => this.renderFavoriteCard(hotel))}
          </ScrollView>
        ) : (
          <View style={styles.emptyFavoritesContainer}>
            <Image style={styles.emptyFavoritesImage} source={imgEmpty} />
            <Text>Looks like you do not have any favorites</Text>
          </View>
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    hotels: state.favorites.hotels
  };
}

Favorites.propTypes = {
  hotels: PropTypes.shape({}).isRequired
};

export default connect(mapStateToProps)(Favorites);
