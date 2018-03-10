import React, { PureComponent } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import App from "~/src/app/app";
import styles from "./styles";
import Search from "../search/search";
import hotelData from "./data.json";

const hotelImage = require("~/assets/images/hotel.jpg");
const startIcon = require("~/assets/images/iconFavorite.png");
const favoritesHeaderIcon = require("~/assets/images/favorites.png");

class Home extends PureComponent {
  static navigationOptions = {
    headerRight: (
      <TouchableOpacity
        style={styles.favoritesHeaderIconContainer}
        onPress={() =>
          App.navigateTo({
            routeName: "Favorites"
          })
        }
      >
        <Image
          style={styles.favoritesHeaderIcon}
          source={favoritesHeaderIcon}
        />
      </TouchableOpacity>
    )
  };
  constructor(props) {
    super(props);
    this.state = {
      title: "My home"
    };
  }

  // eslint-disable-next-line
  renderStars(starts) {
    const arrayStart = [];
    let i = 0;
    for (i; i <= starts; i++) {
      arrayStart.push(<Image style={styles.startIcon} source={startIcon} />);
    }
    return arrayStart;
  }

  renderItem(item) {
    const params = {
      routeName: "HotelDetail",
      props: item
    };
    return (
      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={() => App.navigateTo(params)}
          style={[styles.cartContent, styles.shadow]}
        >
          <View style={styles.imageContainer}>
            <Image style={styles.hotelImage} source={hotelImage} />
          </View>
          <View style={styles.footerCart}>
            <View style={styles.leftFooterCart}>
              <Text numberOfLines={1} style={styles.hotelName}>
                {item.name}
              </Text>
              <View style={[styles.flexRow, styles.startsContainer]}>
                {this.renderStars(item.stars)}
              </View>
            </View>
            <View style={styles.rightFooterCart}>
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

  render() {
    return (
      <FlatList
        ListHeaderComponent={<Search />}
        stickyHeaderIndices={[0]}
        data={hotelData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }
}

export default Home;
