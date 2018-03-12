import { NavigationActions } from "react-navigation";
import { create_store_structure } from "~/src/redux/actions/hotels";

export default class App {
  static setMainNav(mainNav) {
    App.mainNav = mainNav;
  }

  static redux(redux) {
    App.redux = redux;
  }

  static downloadDB() {
    App.redux.dispatch(create_store_structure());
  }

  static navigateTo(params) {
    App.mainNav.dispatch(
      NavigationActions.navigate({
        routeName: params.routeName,
        params: params.props ? params.props : {}
      })
    );
  }

  static goBack() {
    App.mainNav.dispatch({ type: "Navigation/BACK" });
  }
}
