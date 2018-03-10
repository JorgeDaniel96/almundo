import { StyleSheet } from "react-native";
import Device from "~/src/app/device";

export default StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    width: Device.width,
    height: 100,
    padding: 10,
    alignItems: "center"
  },
  mainContainerMap: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%"
  },
  mapContainer: {
    height: "100%"
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%"
  },
  containerMap: {
    position: "absolute",
    bottom: 0,
    height: 110,
    width: "100%",
    alignItems: "center"
  },
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#ffbc00bd"
  },
  buttonAddToFavoriteContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonAddToFavorite: {
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 1.5
  },
  buttonAddToFavoriteText: {
    color: "white",
    fontWeight: "bold"
  },
  buttonAddToFavoriteView: {
    paddingBottom: 12,
    paddingTop: 12,
    paddingRight: 25,
    paddingLeft: 25,
    borderRadius: 20
  },
  storeDetail: {
    backgroundColor: "white",
    borderRadius: 10,
    position: "absolute",
    width: "90%",
    height: 120,
    display: "flex",
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: "center",
    top: -100
  },
  shadow: {
    shadowColor: "0 14px 28px rgba(0,0,0,0.30)",
    shadowOpacity: 0.25,
    shadowRadius: 2,
    shadowOffset: {
      height: 5,
      width: 0
    }
  },
  nameItem: {
    fontSize: 16,
    color: "rgb(0, 0, 0)",
    lineHeight: 20,
    width: "70%"
  },
  addressItem: {
    fontSize: 13,
    color: "rgba(0, 0, 0, 0.36)",
    lineHeight: 20,
    width: "70%"
  },
  hourItem: {
    width: "60%",
    fontSize: 11,
    fontWeight: "bold",
    color: "#ffbc00bd",
    lineHeight: 20
  }
});
