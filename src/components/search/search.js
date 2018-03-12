import React, { PureComponent } from "react";
import { View, TextInput, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const searchIcon = require("~/assets/images/iconSearch.png");

class Search extends PureComponent {
  render() {
    return (
      <View style={[styles.containerSearch]}>
        <Image style={styles.searchIco} source={searchIcon} />
        <TextInput
          clearButtonMode={"while-editing"}
          autoCorrect={false}
          style={styles.textInput}
          placeholder={"Search hotel"}
          onChangeText={hotelSearched =>
            this.props.filterHotelLists(hotelSearched)
          }
          onChange={this.searchByName}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
        />
      </View>
    );
  }
}

Search.propTypes = {
  filterHotelLists: PropTypes.func.isRequired
};

export default Search;
