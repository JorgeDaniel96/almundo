import React from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import MainNavigator from "~/src/app/main-navigator";
import App from "~/src/app/app";
import reducers from "./src/redux/reducers/index";

const store = createStore(reducers, applyMiddleware(thunk));
App.redux(store);

const RootComponent = () => (
  <Provider store={store}>
    <MainNavigator
      ref={navigator => {
        App.setMainNav(navigator);
      }}
    />
  </Provider>
);

export default RootComponent;
