import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import MapDetail from "./map-detail";
import styles from "./styles";

const hotelIcon = require("~/assets/images/gpsUser.png");

class HotelDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: this.props.latitude,
        longitude: this.props.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
      }
    };
  }
  render() {
    return (
      <View style={styles.mainContainerMap}>
        <View style={[styles.mapContainer]}>
          <MapView
            style={styles.map}
            initialRegion={this.state.region}
            loadingEnabled={true}
          >
            <MapView.Marker
              coordinate={{
                latitude: this.props.latitude,
                longitude: this.props.longitude
              }}
              image={hotelIcon}
              key={this.props._id}
              title={this.props.name}
            />
          </MapView>
        </View>
        <MapDetail hotelInfo={this.props} />
      </View>
    );
  }
}

HotelDetail.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired
};

export default HotelDetail;
