import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import FavoriteDetail from "~/src/components/favorites/favorite-detail";

// mock props
const hotelDetail = {
  name: "Hotel Stefanos",
  stars: 3,
  price: 994.18,
  amenities: [
    "safety-box",
    "nightclub",
    "deep-soaking-bathtub",
    "beach",
    "business-center"
  ],
  address: "53 May Road, Mount Roskill, Auckland, 1041"
};

it("FavoriteDetail render is correct", () => {
  const tree = renderer.create(<FavoriteDetail hotelDetail={hotelDetail} />);
  expect(tree).toMatchSnapshot();
});
