import React, { useState } from "react";
import { View, TextInput, Text, Pressable, Alert } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import { Snackbar } from "react-native-paper";
import { COLORS } from "../../styles/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addProductReviewStyle } from "../../styles/ProductDetail/AddProductReview";

export default function ReviewThisProduct({
  product_id,
  setReviewAdded,
  reviewAdded,
}) {
  const [visibleSuccess, setVisibleSuccess] = React.useState(false);
  const [visibleError, setVisibleError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const onDismissSnackBar = () => setVisibleSuccess(false);
  const onDismissSnackBarError = () => setVisibleError(false);
  const [review, setReview] = useState();
  const [rating, setRating] = useState();

  const addReview = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rating,
          review,
        }),
      };

      const response = await fetch(
        `https://findgure.up.railway.app/api/product/review/${product_id}/`,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok) {
        data.message
          ? setErrorMessage(data.message)
          : setErrorMessage("Make sure to provide a rating and review!");
        setVisibleError(!visibleError);
      } else {
        setReviewAdded(!reviewAdded);
        setReview("");
        setVisibleSuccess(!visibleSuccess);
      }

      return data;
    } catch (error) {}
  };

  function onFinishRating(value) {
    setRating(value);
  }

  return (
    <View style={{ marginTop: 35 }}>
      <Text style={addProductReviewStyle.textReviewProduct}>
        Review This product
      </Text>
      <AirbnbRating
        count={5}
        defaultRating={1}
        ratingCount={1}
        size={20}
        showRating={false}
        onFinishRating={onFinishRating}
        ratingContainerStyle={addProductReviewStyle.ratingStyle}
      />
      <TextInput
        selectionColor={"white"}
        placeholder="Enter your review..."
        multiline={true}
        numberOfLines={3}
        value={review}
        onChangeText={setReview}
        placeholderTextColor={COLORS.WHITE}
        style={addProductReviewStyle.inputReview}
      />
      <Pressable
        onPress={addReview}
        title="Submit"
        style={addProductReviewStyle.submitButton}
      >
        <Text>Submit</Text>
      </Pressable>
      <Snackbar
        style={addProductReviewStyle.snackbarSuccess}
        visible={visibleSuccess}
        onDismiss={onDismissSnackBar}
        duration={4000}
      >
        Thanks for review this product!
      </Snackbar>
      <Snackbar
        style={addProductReviewStyle.snackbarError}
        visible={visibleError}
        onDismiss={onDismissSnackBarError}
        duration={4000}
      >
        {errorMessage}
      </Snackbar>
    </View>
  );
}
