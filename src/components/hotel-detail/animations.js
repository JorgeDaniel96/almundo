import { Animated } from "react-native";

export default class Animations {
  constructor(mapDetail) {
    this.mapDetail = mapDetail;
    this.state = this.mapDetail.state;
    this.bootAnimations();
  }

  bootAnimations() {
    this.showHotelInformation = Animated.parallel([
      Animated.timing(this.state.button, {
        duration: 600,
        delay: 1000,
        toValue: 0
      }),
      Animated.timing(this.state.detail, {
        duration: 600,
        delay: 1000,
        toValue: -100
      })
    ]);

    this.hideHotelInformation = Animated.parallel([
      Animated.timing(this.state.button, {
        duration: 600,
        toValue: -600
      }),
      Animated.timing(this.state.detail, {
        duration: 600,
        toValue: 300
      })
    ]);
  }
}
