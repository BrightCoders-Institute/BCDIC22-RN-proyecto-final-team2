import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import {
  stylesCheckout,
  titles,
} from "../../styles/CheckoutScreen/Screen_Checkout3";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../styles/colors";

export default function Checkout3({ navigation }) {
  return (
    <View>
      <Image
        source={require("../../resources/checkoutNavigator3.png")}
        style={titles.image}
      />
      <ScrollView>
        <Text style={titles.maintitle}>Thank you!</Text>
        <Text style={titles.textOrder}>
          Your order has been placed {"\n"} You will receive an email invoice
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("OnHome")}
          style={stylesCheckout.continueButton}
        >
          <Text style={stylesCheckout.textButton}>Keep shopping</Text>
          <MaterialIcons name="navigate-next" size={30} color="black" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
