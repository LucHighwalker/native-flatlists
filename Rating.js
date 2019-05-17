import React from "react";
import { Text } from "react-native";

const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push("*");
  }
  return <Text>{'***'}</Text>;
};

export default Rating;
