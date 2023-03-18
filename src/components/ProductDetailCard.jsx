import { Text, View, TouchableOpacity, Image, Pressable } from "react-native";
import React, { PureComponent } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { AirbnbRating } from "react-native-ratings";
import { COLORS } from "../styles/colors";
import { containers } from "../styles/HomeScreen/Components_ProductCard";
import { elements } from "../styles/HomeScreen/Components_ProductCard";
import { productDetailStyle } from "../styles/ProductDetail/ProductDetailCard";
export default class ProductDetailCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false,
    };
  }

  render() {
    return (
      <View style={productDetailStyle.cardContainer}>
        <Image
          style={productDetailStyle.imageProduct}
          source={{
            uri: "https://findgure.s3.amazonaws.com/products/Deadpool.png",
          }}
        />

        <View>
          <Pressable
            onPress={() => {
              this.setState({ isFavorite: !this.state.isFavorite });
            }}
          >
            <FontAwesome
              name={this.state.isFavorite ? "heart" : "heart-o"}
              size={24}
              color={COLORS.DARK_PURPLE}
              style={productDetailStyle.heartIcon}
            />
          </Pressable>

          <Text style={elements.productTitle}>
            {"product name".length > 10
              ? "Product name".substring(0, 7) + "..."
              : "Product name"}
          </Text>
          <Text style={elements.textFranchise}>
            Franchise:{" "}
            <Text style={elements.productFranchise}>
              {"franchise name".length > 15
                ? "Franchise name".substring(0, 10) + "..."
                : "Franchise name"}
            </Text>
          </Text>
          <Text style={elements.textCategory}>
            Category: <Text style={elements.productCategory}>My category</Text>
          </Text>
          <Text
            numberOfLines={10}
            style={productDetailStyle.descriptionProduct}
          >
            Neque porro quisquam est qui dolorem ipsum quia dolor sit
            amet.dolorem ipsum quia dolor sit amet
          </Text>
          <AirbnbRating
            showRating={false}
            size={15}
            defaultRating={5}
            isDisabled={true}
            starContainerStyle={productDetailStyle.starContainer}
          />
          <Text style={productDetailStyle.priceProduct}>$ {45 + ".00"}</Text>
          <View></View>
          <Pressable onButtonPress style={productDetailStyle.buttonBuy}>
            <Text style={elements.textButtonBuy}>Buy Now</Text>
          </Pressable>
          <Pressable onButtonPress style={containers.buttonAddToCart}>
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
    );
  }
}
