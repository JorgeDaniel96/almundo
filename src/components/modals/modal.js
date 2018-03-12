import React, { PureComponent } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import App from "~/src/app/app";
import styles from "./styles";

const iconClose = require("~/assets/images/iconClose.png");

class Modal extends PureComponent {
  render() {
    return (
      <View style={[styles.show, styles.container]}>
        <View style={styles.insideContainer}>
          <View style={styles.childrenContainer}>{this.props.children}</View>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => App.goBack()}
          >
            <Image style={styles.icons} source={iconClose} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Modal;
