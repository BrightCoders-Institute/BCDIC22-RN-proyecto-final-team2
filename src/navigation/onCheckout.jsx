import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Checkout1 from "../screens/Checkout/Checkout1";
import Checkout2 from "../screens/Checkout/Checkout2";
import Checkout3 from "../screens/Checkout/Checkout3";
import OnHome from "./onHome";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default class OnCheckout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator
        initialRouteName = "Checkout1"
        screenOptions={{
          headerShown: false,
          headerLeft: (props) => (
            <FontAwesome5
              onPress={() => this.props.navigation.navigate("UserProfile")}
              name="user-circle"
              size={30}
              color={props.tintColor}
            />
          ),
          headerRight: (props) => (
            <AntDesign name="shoppingcart" size={30} color={props.tintColor} />
          ),
        }}
      >

        <Stack.Screen name="Checkout1" component={Checkout1} />
        <Stack.Screen name="Checkout2" component={Checkout2} />
        <Stack.Screen name="Checkout3" component={Checkout3} />
        <Stack.Screen name="Home" component={OnHome} />

      </Stack.Navigator>
    );
  }
}
