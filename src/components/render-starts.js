import React from "react";
import { Image } from "react-native";
import styles from "./hotel-lists/styles";

const startIcon = require("~/assets/images/iconFavorite.png");

const RenderStarts = {
  render(starts) {
    const arrayStart = [];
    let i = 1;
    for (i; i <= starts; i++) {
      arrayStart.push(
        <Image key={i} style={styles.startIcon} source={startIcon} />
      );
    }
    return arrayStart;
  }
};

export default RenderStarts;
