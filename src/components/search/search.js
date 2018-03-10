import React, { PureComponent } from "react";
import { View, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const searchIcon = require("~/assets/images/iconSearch.png");
const closeIcon = require("~/assets/images/iconClose.png");

class Search extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.cleanInput = this.cleanInput.bind(this);
    this.searchByName = this.searchByName.bind(this);
  }

  searchByName(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  cleanInput() {
    this.textInput.clear();
  }

  render() {
    return (
      <View style={[styles.containerSearch]}>
        <Image style={styles.searchIco} source={searchIcon} />
        <TextInput
          ref={input => {
            this.textInput = input;
          }}
          style={styles.textInput}
          placeholder={"Search hotel"}
          onChangeText={storeSearched => this.setState({ storeSearched })}
          onChange={this.searchByName}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
        />
        <TouchableOpacity style={styles.closeIco} onPress={this.cleanInput}>
          <Image source={closeIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Search;
