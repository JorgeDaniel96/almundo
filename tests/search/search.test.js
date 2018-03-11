import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import Search from "~/src/components/search/search";

it("Search render is correct", () => {
  const tree = renderer.create(<Search />);
  expect(tree).toMatchSnapshot();
});
