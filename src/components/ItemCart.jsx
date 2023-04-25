import React from "react";
import { Text, View, Pressable, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../styles/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { containers, elements } from "../styles/CartScreen/Components_ItemCart";
import Counter from "react-native-counters";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ItemCart = (props) => {
  const deleteOrderItem = async (productId) => {
    const token = await AsyncStorage.getItem("token");
    try {
      const response = await fetch(
        `https://findgure.up.railway.app/api/orders_items/${productId}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
      }
    } catch (error) {
      return;
    } finally {
      props.setChange(!props.change);
    }
  };
  // update quantity
  const updateOrderItemQty = async (productId, newQty) => {
    const token = await AsyncStorage.getItem("token");
    try {
      const response = await fetch(
        `https://findgure.up.railway.app/api/orders_items/${productId}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({ qty: newQty }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update order item quantity.");
      }
    } catch (error) {
      console.error("Error updating order item quantity:", error);
    }
  };
  const onChange = (number, type) => {
    updateOrderItemQty(props.id, number);
  };
  return (
    <View style={containers.cardContainer}>
      <View style={containers.itemsContainer}>
        <View style={containers.imageContainer}>
          <Pressable>
            <Image style={elements.imageStyles} source={{ uri: props.image }} />
          </Pressable>
        </View>

        <View style={containers.productDetails}>
          <Text style={elements.titleText}>
            {props.name && props.name.length > 10
              ? props.name.substring(0, 7) + "..."
              : props.name}
          </Text>
          <Text style={elements.franchiseText}>
            Franchise:{" "}
            <Text style={elements.productFranchise}>
              {props.franchise && props.franchise.length > 10
                ? props.franchise.substring(0, 10) + "..."
                : props.franchise}
            </Text>
          </Text>
          <Text style={elements.categoryText}>
            Category:{" "}
            <Text style={elements.productCategory}>{props.category}</Text>
          </Text>
          <Text style={elements.priceText}>$ {props.price + ".00"}</Text>
          <Text style={elements.descriptionText}>
            {props.description && props.description.length > 30
              ? props.description.substring(0, 30) + "..."
              : props.description}
          </Text>
        </View>

        <View style={containers.buttonsContainer}>
          <View style={containers.counterContainer}>
            <Counter
              start={props.qty}
              min={1}
              max={100}
              buttonStyle={elements.counterButtonStyle}
              buttonTextStyle={elements.counterButtonTextStyle}
              countTextStyle={elements.counterCountTextStyle}
              onChange={onChange}
            />
          </View>
          <TouchableOpacity onPress={() => deleteOrderItem(props.id)}>
            <FontAwesome5
              name="trash-alt"
              size={20}
              color={COLORS.DARK_PURPLE}
              style={elements.deleteButtonStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemCart;
