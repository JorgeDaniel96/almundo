import { StackNavigator } from "react-navigation";
import HotelLists from "~/src/components/hotel-lists/hotel-lists";
import HotelDetail from "~/src/components/hotel-detail/hotel-detail";
import Favorites from "~/src/components/favorites/favorites";
import Modal from "~/src/components/modals/modal";
import { useNavigationParamsAsProps, noHeader } from "./helpers";

const headerStyle = {
  headerStyle: {
    backgroundColor: "#fff"
  },
  headerTintColor: "#daa204f0",
  headerTitleStyle: {
    fontWeight: "bold",
    color: "black"
  },
  headerBackTitleStyle: {
    color: "black"
  }
};

const MainStack = StackNavigator(
  {
    HotelLists: {
      screen: HotelLists,
      navigationOptions: {
        ...headerStyle,
        title: "Hotels"
      }
    },
    HotelDetail: {
      screen: useNavigationParamsAsProps(HotelDetail),
      navigationOptions: {
        ...headerStyle,
        title: "Detail"
      }
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        ...headerStyle,
        title: "Favorites"
      }
    }
  },
  {
    cardStyle: {
      backgroundColor: "#f1f1f1"
    }
  }
);

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack
    },
    Modal: {
      screen: useNavigationParamsAsProps(Modal),
      navigationOptions: noHeader
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default RootStack;
