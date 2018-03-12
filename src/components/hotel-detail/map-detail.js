import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as favoritesActions from "~/src/redux/actions/favorites";
import Animations from "./animations";
import styles from "./styles";

class MapDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: new Animated.Value(-600),
      detail: new Animated.Value(300)
    };
    this.animations = new Animations(this);
  }

  componentDidMount() {
    this.animations.showHotelInformation.start();
  }

  addToFavorites(hotelInfo) {
    this.animations.hideHotelInformation.start(() => {
      this.props.actions.add_hotel_to_favorites(hotelInfo._id);
    });
  }

  render() {
    return (
      <View style={styles.containerMap}>
        <Animated.View
          style={[styles.container, { bottom: this.state.button }]}
        >
          <View style={styles.buttonAddToFavoriteContainer}>
            <TouchableOpacity
              style={styles.buttonAddToFavorite}
              onPress={() => this.addToFavorites(this.props.hotelInfo)}
            >
              <View style={styles.buttonAddToFavoriteView}>
                <Text style={styles.buttonAddToFavoriteText}>
                  ADD TO FAVORITES
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
        <Animated.View
          style={[
            styles.hotelDetail,
            styles.shadow,
            { top: this.state.detail }
          ]}
        >
          <Text style={styles.nameItem}>{this.props.hotelInfo.name}</Text>
          <Text style={styles.addressItem}>{this.props.hotelInfo.address}</Text>
        </Animated.View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ...bindActionCreators(favoritesActions, dispatch)
    }
  };
}

MapDetail.propTypes = {
  actions: PropTypes.shape({
    add_hotel_to_favorites: PropTypes.func.isRequired
  }).isRequired,
  hotelInfo: PropTypes.shape({
    address: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  }).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MapDetail);
