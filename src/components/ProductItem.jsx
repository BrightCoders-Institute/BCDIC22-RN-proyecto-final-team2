import { Text, View, Image, Pressable, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { AirbnbRating } from "react-native-ratings";
import { COLORS } from "../styles/colors";
import { containers } from "../styles/HomeScreen/Components_ProductCard";
import { elements } from "../styles/HomeScreen/Components_ProductCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export const ProductItem = ({ product, isFavorite }) => {
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(isFavorite);
  const { name, franchise, category, image, id, rating, price } = product;
  const addToCart = async () => {
    const token = await AsyncStorage.getItem("token");
    try {
      const response = await fetch(
        "https://findgure.up.railway.app/api/orders_items/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + token,
          },
          body: JSON.stringify({
            product_id: id,
            qty: 1,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Unable to add the product to the cart");
      }

      const data = await response.json();
      ToastAndroid.show(
        "The product was successfully added to the cart",
        ToastAndroid.LONG
      );
    } catch (e) {
      ToastAndroid.show(e.toString(), ToastAndroid.LONG);
    }
  };

  // Whish-list
  const sendFavorite = async () => {
    const token = await AsyncStorage.getItem("token");

    const config = {
      headers: {
        Authorization: "Token " + token,
      },
      method: !favorite ? "POST" : "DELETE",
    };
    const message = !favorite ? "added to" : "removed from";

    try {
      await fetch(
        `https://findgure.up.railway.app/api/product/favorite/${id}/`,
        config
      );
      ToastAndroid.show(
        "The product was succesfully " + message + " your wishlist",
        ToastAndroid.LONG
      );
      setFavorite(!favorite);
    } catch (e) {
      ToastAndroid.show(e.toString(), ToastAndroid.LONG);
    }
  };

  return (
    <View style={containers.mainContainer}>
      <Pressable>
        <Image style={elements.productImage} source={{ uri: image }} />
      </Pressable>
      <View>
        <Pressable onPress={() => sendFavorite()}>
          <FontAwesome
            name={favorite ? "heart" : "heart-o"}
            size={24}
            color={COLORS.DARK_PURPLE}
            style={elements.favoriteIcon}
          />
        </Pressable>

        <Text style={elements.productTitle}>
          {name.length > 10 ? name.substring(0, 7) + "..." : name}
        </Text>
        <Text style={elements.textFranchise}>
          Franchise:{" "}
          <Text style={elements.productFranchise}>
            {franchise.name.length > 10
              ? franchise.name.substring(0, 10) + "..."
              : franchise.name}
          </Text>
        </Text>
        <Text style={elements.textCategory}>
          Category:{" "}
          <Text style={elements.productCategory}>
            {franchise.category.length > 10
              ? franchise.category.substring(0, 10) + "..."
              : franchise.category}
          </Text>
        </Text>
        <AirbnbRating
          showRating={false}
          size={15}
          defaultRating={rating}
          isDisabled={true}
          starContainerStyle={elements.productRating}
        />
        <Text style={elements.productPrice}>$ {price + ".00"}</Text>
        <Pressable
          onPress={() => navigation.navigate("Cart")}
          style={containers.buttonBuy}
        >
          <Text style={elements.textButtonBuy}>Buy Now</Text>
        </Pressable>
        <Pressable onPress={addToCart} style={containers.buttonAddToCart}>
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
};
