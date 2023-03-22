import React from "react";
import { View, Text } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import { reviewStyle } from "../../styles/ProductDetail/ReviewsStyle";

export default function Reviews({ user, rating, review, date }) {
  return (
    <View style={reviewStyle.reviewContainer}>
      <View style={reviewStyle.ratingContainer}>
        <Text style={reviewStyle.usernameStyle}>{user}</Text>
        <AirbnbRating
          showRating={false}
          size={15}
          defaultRating={rating}
          isDisabled={true}
          starContainerStyle={{ marginLeft: 5 }}
        />
      </View>
      <Text style={reviewStyle.description}>{review}</Text>
      <Text style={reviewStyle.date}>{date}</Text>
    </View>
  );
}
