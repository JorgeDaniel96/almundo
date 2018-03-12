import { StyleSheet } from "react-native";
import Device from "~/src/app/device";

export default StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "rgba(36, 32, 32, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    elevation: 20,
    bottom: "0%",
    height: Device.height,
    width: Device.width
  },
  childrenContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "space-around"
  },
  insideContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    height: "70%",
    width: "80%",
    paddingHorizontal: 15
  },
  iconContainer: {
    position: "absolute",
    left: 15,
    top: 15,
    width: 30,
    height: 30,
    zIndex: 10,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  icons: {
    width: "100%",
    zIndex: 10
  }
});
