import {
  Text,
  View,
  Image,
  Pressable,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { AirbnbRating } from "react-native-ratings";
import { COLORS } from "../styles/colors";
import { elements } from "../styles/HomeScreen/Components_ProductCard";
import Reviews from "../components/DetailScreen/Reviews";
import { productDetailCard } from "../styles/ProductDetail/ProductDetailCard";
import { Feather } from "@expo/vector-icons";
import { productDetailStyle } from "../styles/ProductDetail/ProductDetailStyle";
import ReviewThisProduct from "./DetailScreen/ReviewThisProduct";
import Loading from "./Loading";

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
const ProductDetailCard = () => {
  const [isActive, setIsActive] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [details, setDetails] = useState("");
  const [reviewAdded, setReviewAdded] = useState(false);

  async function fetchProductDetails() {
    try {
      const response = await fetch(
        "https://findgure.up.railway.app/api/product/detail/2/"
      );
      const data = await response.json();
      setDetails(data);
      return data;
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, [reviewAdded]);

  return (
    <>
      {/* card details */}
      {details !== "" ? (
        <View style={productDetailCard.cardContainer}>
          <Image
            style={productDetailCard.imageProduct}
            source={{
              uri: details.image,
            }}
          />

          <View>
            <Pressable onPress={() => setIsFavorite(!isFavorite)}>
              <FontAwesome
                name={isFavorite ? "heart" : "heart-o"}
                size={24}
                color={COLORS.DARK_PURPLE}
                style={productDetailCard.heartIcon}
              />
            </Pressable>

            <Text style={elements.productTitle}>
              {details.name.length > 10
                ? details.name.length.substring(0, 7) + "..."
                : details.name}
            </Text>
            <Text style={elements.textFranchise}>
              Franchise:{" "}
              <Text style={elements.productFranchise}>
                {details.franchise.name.length > 15
                  ? details.franchise.name.substring(0, 10) + "..."
                  : details.franchise.name}
              </Text>
            </Text>
            <Text style={elements.textCategory}>
              Category:{" "}
              <Text style={elements.productCategory}>
                {details.franchise.category}
              </Text>
            </Text>
            <Text
              numberOfLines={10}
              style={productDetailCard.descriptionProduct}
            >
              {details.description}
            </Text>
            <AirbnbRating
              showRating={false}
              size={15}
              defaultRating={details.rating}
              isDisabled={true}
              starContainerStyle={productDetailCard.starContainer}
            />
            <Text style={productDetailCard.priceProduct}>
              $ {details.price + ".00"}
            </Text>
            <Pressable style={productDetailCard.buttonBuy}>
              <Text style={elements.textButtonBuy}>Buy Now</Text>
            </Pressable>
            <Pressable style={productDetailCard.buttonAddToCart}>
              <Text style={elements.textButtonAddToCart}>Add to cart</Text>
              <Ionicons
                name="cart-outline"
                size={16}
                color={COLORS.DARK_PURPLE}
                style={elements.cartIcon}
              />
            </Pressable>
          </View>
        </View>
      ) : (
        <View style={productDetailCard.cardContainer}>
          <Loading />
        </View>
      )}

      {/* Reviews */}
      {details && (
        <Collapse isExpanded={isActive} onToggle={() => setIsActive(!isActive)}>
          <CollapseHeader style={productDetailStyle.collapseHeader}>
            <Text style={productDetailStyle.textReview}>Reviews</Text>
            <Feather
              name={isActive ? "chevron-up" : "chevron-down"}
              size={24}
              style={productDetailStyle.arrowIcon}
            />
          </CollapseHeader>
          <CollapseBody>
            <ScrollView
              horizontal={true}
              contentContainerStyle={productDetailStyle.flatListContainerStyle}
            >
              <FlatList
                data={details.reviews}
                keyExtractor={(review) => review.user}
                renderItem={({ item }) => {
                  const date = new Date(item.date_created);
                  const day = date.getDate();
                  const year = date.getFullYear();
                  const month = date
                    .toLocaleString("default", { month: "long" })
                    .split(" ")[1];
                  const formatDate = `${day} ${month}, ${year}`;
                  return (
                    <Reviews
                      key={item.user}
                      user={item.user}
                      rating={item.rating}
                      review={item.review}
                      date={formatDate}
                    />
                  );
                }}
              />
            </ScrollView>
          </CollapseBody>
        </Collapse>
      )}
      <ReviewThisProduct
        product_id={details?.id}
        setReviewAdded={setReviewAdded}
        reviewAdded={reviewAdded}
      />
    </>
  );
};

export default ProductDetailCard;
