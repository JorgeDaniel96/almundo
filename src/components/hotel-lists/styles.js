import { StyleSheet } from "react-native";
import Device from "~/src/app/device";

export default StyleSheet.create({
  cardContainer: {
    width: Device.width,
    marginBottom: 15,
    paddingHorizontal: 10
  },
  cartContent: {
    height: 270,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 3
  },
  imageContainer: {
    height: "75%",
    width: "100%",
    borderRadius: 3
  },
  hotelImage: {
    borderRadius: 3,
    height: "100%",
    width: "100%"
  },
  startIcon: {
    tintColor: "#ffbc00",
    height: 30,
    width: 30
  },
  flexRow: {
    flexDirection: "row"
  },
  footerCart: {
    height: "25%",
    width: "100%",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },
  leftFooterCart: {
    justifyContent: "center",
    width: "60%",
    height: "100%"
  },
  rightFooterCart: {
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    width: "40%"
  },
  hotelName: {
    fontWeight: "bold",
    fontSize: 22
  },
  startsContainer: {
    left: -5
  },
  pricePerNightText: {
    color: "#a3a3a3"
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffbc00bd"
  },
  favoritesHeaderIconContainer: {
    width: 50,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 4
  },
  favoritesHeaderIcon: {
    width: 26,
    height: 35
  },
  shadow: {
    shadowColor: "0 14px 28px rgba(0,0,0,0.30)",
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: {
      height: 5,
      width: 0
    }
  }
});
