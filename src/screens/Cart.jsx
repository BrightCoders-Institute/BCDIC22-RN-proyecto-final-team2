import React, { useState, useEffect } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import ItemCart from "../components/ItemCart";
import { COLORS } from "../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { containers, elements } from "../styles/CartScreen/Screen_Cart";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

const Cart = (props) => {
  const navigation = useNavigation();
  const [orderItems, setOrderItems] = useState([]);
  const [change, setChange] = useState(true);

  const fetchOrderItems = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(
        "https://findgure.up.railway.app/api/get_orders/",
        {
          headers: {
            Authorization: "Token " + token,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch order items");
      }

      const data = await response.json();
      setOrderItems(data);
    } catch (error) {
      console.error("Error fetching order items:", error);
    }
  };

  useEffect(() => {
    fetchOrderItems();
  }, [change]);

  useFocusEffect(
    React.useCallback(() => {
      fetchOrderItems();
      return () => {};
    }, [])
  );
  return (
    <View style={containers.mainContainer}>
      <Text style={elements.titleText}>My cart</Text>
      <FlatList
        data={orderItems}
        ItemSeparatorComponent={() => (
          <View style={elements.itemSeparatorStyle} />
        )}
        renderItem={({ item }) => {
          const { product_id, qty } = item;
          return (
            <ItemCart
              image={product_id.image}
              name={product_id.name}
              franchise={product_id.franchise.name}
              category={product_id.franchise.category}
              price={product_id.price}
              description={product_id.description}
              id={product_id.id}
              qty={qty}
              setChange={setChange}
              change={change}
            />
          );
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("OnCheckout");
        }}
        style={containers.buttonContainer}
      >
        <Text style={elements.buttonText}>Checkout</Text>
        <MaterialIcons
          name="navigate-next"
          size={30}
          color={COLORS.DARK_PURPLE}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
