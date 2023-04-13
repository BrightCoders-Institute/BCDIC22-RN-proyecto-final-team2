import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import SearchInput from "../components/SearchInput";
import Cart from "../screens/Cart";
import Checkout from "../screens/Checkout/Checkout1";
import Checkout2 from "../screens/Checkout/Checkout2";
import Checkout3 from "../screens/Checkout/Checkout3";

const Stack = createNativeStackNavigator();

export default class OnCart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Cart"
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
        <Stack.Screen name="Cart" component={Cart} />

        <Stack.Screen name="Checkout" component={Checkout} />

        <Stack.Screen name="Checkout2" component={Checkout2} />

        <Stack.Screen name="Checkout3" component={Checkout3} />
      </Stack.Navigator>
    );
  }
}
