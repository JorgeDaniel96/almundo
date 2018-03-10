import { StyleSheet } from "react-native";
import Device from "~/src/app/device";

export default StyleSheet.create({
  emptyFavoritesContainer: {
    backgroundColor: "white",
    width: Device.width,
    height: Device.height,
    paddingBottom: "25%",
    alignItems: "center",
    justifyContent: "center"
  },
  emptyFavoritesImage: {
    marginBottom: 20
  },
  favoriteCardContainer: {
    marginBottom: 5
  },
  favoriteCartContent: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15
  },
  fontTitle: {
    fontWeight: "bold",
    fontSize: 17,
    paddingHorizontal: 20,
    textAlign: "center"
  },
  favoriteDetailContainer: {
    width: "100%",
    height: "90%",
    padding: 10,
    paddingTop: 0,
    alignItems: "center"
  },
  hotelImageContainer: {
    width: "100%",
    height: "40%"
  },
  hotelImage: {
    borderRadius: 3,
    height: "100%",
    width: "100%"
  },
  flexRow: {
    flexDirection: "row"
  },
  startIcon: {
    tintColor: "#ffbc00",
    height: 30,
    width: 30,
    marginBottom: 5
  },
  amenitiesContainer: {
    width: "100%",
    paddingVertical: 20
  },
  amenitieText: {
    marginBottom: 10
  },
  addressTextContainer: {
    width: "100%"
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  pricePerNightText: {
    color: "#a3a3a3"
  },
  priceText: {
    textAlign: "right",
    fontWeight: "bold",
    color: "#ffbc00bd"
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