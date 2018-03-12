import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from "react-native";
import App from "~/src/app/app";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HotelListsItem from "./hotel-lists-item";
import styles from "./styles";
import Search from "../search/search";
import renderStarts from "../render-starts";

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
    this.state = {
      hotelSearched: "",
      newHotelList: ""
    };
    this.setList = this.setList.bind(this);
    this.searchByName = this.searchByName.bind(this);
  }

  setList(stringFilter) {
    this.setState(
      {
        hotelSearched: stringFilter
      },
      () => {
        const result = this.props.hotels.filter(this.searchByName);
        this.setState({
          newHotelList: result
        });
      }
    );
  }

  searchByName(hotel) {
    return hotel.name
      .toLowerCase()
      .includes(this.state.hotelSearched.toLowerCase());
  }

  render() {
    const dataIsReady = this.props.hotels.length >= 1;
    console.log("dataIsReady: ", dataIsReady);
    return (
      <View>
        {dataIsReady ? (
          <FlatList
            ListHeaderComponent={<Search filterHotelLists={this.setList} />}
            stickyHeaderIndices={[0]}
            data={
              this.state.newHotelList.length === 0
                ? this.props.hotels
                : this.state.newHotelList
            }
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <HotelListsItem key={item.__id} item={item} />
            )}
          />
        ) : (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#ffbc00bd" />
          </View>
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    hotels: state.hotels.hotels
  };
}

HotelLists.propTypes = {
  hotels: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    .isRequired
};

export default connect(mapStateToProps)(HotelLists);
