import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import App from "~/src/app/app";
import * as actions from "~/src/redux/actions/hotels";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "./styles";
import Search from "../search/search";
import hotelData from "./data.json";
import RenderStarts from "../render-starts";

const hotelImage = require("~/assets/images/hotel.jpg");
const favoritesHeaderIcon = require("~/assets/images/favorites.png");

class HotelLists extends PureComponent {
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
    this.state = {};
  }

  componentDidMount() {
    this.props.actions.create_store_structure();
    const hotels = this.props.hotels;
    console.log(hotels);
  }

  renderItem(item) {
    this.item = item;
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
            <Image style={styles.hotelImage} source={hotelImage} />
          </View>
          <View style={styles.footerCard}>
            <View style={styles.leftFooterCard}>
              <Text numberOfLines={1} style={styles.hotelName}>
                {item.name}
              </Text>
              <View style={[styles.flexRow, styles.startsContainer]}>
                {RenderStarts.render(item.stars)}
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

function mapStateToProps(state) {
  return {
    hotels: state.hotels.hotels
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

HotelLists.propTypes = {
  actions: PropTypes.shape({
    create_store_structure: PropTypes.func.isRequired
  }).isRequired,
  hotels: PropTypes.shape({}).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelLists);
