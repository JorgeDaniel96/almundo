import React, { Component } from "react";
/* eslint react/prop-types: 0 */

export const useNavigationParamsAsProps = SomeComponent =>
  class extends Component {
    static navigationOptions = SomeComponent.navigationOptions;
    render() {
      const { params } = this.props.navigation.state;
      this.props = { ...this.props, ...params };
      return <SomeComponent {...this.props} />;
    }
  };

export const noHeader = () => ({
  header: false
});
