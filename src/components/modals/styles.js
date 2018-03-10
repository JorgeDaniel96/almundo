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
    marginTop: 30,
    width: "100%"
  },
  insideContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
    height: "70%",
    width: "80%",
    paddingHorizontal: 15
  },
  iconContainer: {
    position: "absolute",
    left: 15,
    top: 5,
    zIndex: 10,
    padding: 16
  },
  containerIcons: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    position: "absolute",
    top: 17
  },
  icons: {
    width: "100%"
  }
});
