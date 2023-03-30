import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";

import ProductDetail from "../screens/ProductDetail";
const Stack = createNativeStackNavigator();

export default class OnProductDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator
        initialRouteName="ProductDetail"
        screenOptions={{
          headerShown: false,
          headerBackVisible: false,
          headerLeft: (props) => (
            <FontAwesome5
              onPress={() => this.props.navigation.navigate("UserProfile")}
              name="user-circle"
              size={30}
              color={props.tintColor}
            />
          ),
          headerRight: (props) => (
            <AntDesign
              onPress={() => this.props.navigation.navigate("Cart")}
              name="shoppingcart"
              size={30}
              color={props.tintColor}
            />
          ),
        }}
      >
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    );
  }
}
