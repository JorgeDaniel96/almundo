import React from "react";
import { View } from "react-native";
import Modal from "~/src/components/modals/modal";
import renderer from "react-test-renderer";

it("Modal render is correct with children", () => {
  const tree = renderer.create(<Modal children={<View />} />).toJSON();
  expect(tree).toMatchSnapshot();
});
