/* eslint-disable */

jest.mock("Animated", () => {
  const ActualAnimated = require.requireActual("Animated");

  ActualAnimated.timing = (value, config) => ({
    start: callback => callback && callback(),
    reset: callback => callback && callback()
  });
  ActualAnimated.spring = (value, config) => ({
    start: callback => callback && callback(),
    reset: callback => callback && callback()
  });
  ActualAnimated.sequence = animations => ({
    start: callback => callback && callback(),
    reset: callback => callback && callback()
  });
  ActualAnimated.parallel = animations => ({
    start: callback => callback && callback(),
    reset: callback => callback && callback()
  });
  ActualAnimated.stagger = animations => ({
    start: callback => callback && callback(),
    reset: callback => callback && callback()
  });
  ActualAnimated.loop = animation => ({
    start: jest.fn()
  });

  return ActualAnimated;
});

jest.mock("react-native-maps", () => {
  const React = require("React");
  const PropTypes = require("prop-types");
  return class MockMapView extends React.Component {
    static Marker = props =>
      React.createElement("Marker", props, props.children);
    static propTypes = { children: PropTypes.any };

    animateToRegion() {}

    render() {
      return React.createElement("MapView", this.props, this.props.children);
    }
  };
});

jest.mock("react-navigation", () => {
  const React = require("React");
  return {
    NavigationActions: {
      navigate: params => params,
      back: params => params
    },
    StackNavigator: () => () => React.createElement("StackNavigator"),
  };
});
