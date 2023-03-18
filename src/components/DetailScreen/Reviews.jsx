import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../../styles/colors";
import { AirbnbRating } from "react-native-ratings";
import { reviewStyle } from "../../styles/ProductDetail/ReviewsStyle";

export default function Reviews() {
  return (
    <View style={reviewStyle.reviewContainer}>
      <View style={reviewStyle.ratingContainer}>
        <Text style={reviewStyle.usernameStyle}>Username</Text>
        <AirbnbRating
          showRating={false}
          size={15}
          defaultRating={4}
          isDisabled={true}
          starContainerStyle={{ marginLeft: 5 }}
        />
      </View>
      <Text style={reviewStyle.description}>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. Porro
        quisquam est qui dolorem ipsum
      </Text>
      <Text style={reviewStyle.date}>Feb 15, 2023</Text>
    </View>
  );
}
