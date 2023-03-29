import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Checkout from "../screens/Checkout/Checkout1";
import Checkout2 from "../screens/Checkout/Checkout2";
import Cart from "../screens/Cart";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import UserProfile from "../screens/UserProfile";
import SearchInput from "../components/SearchInput";

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
          headerShown: true,
          headerBackVisible: false,
          headerLeft: (props) => (
            <FontAwesome5
              name="user-circle"
              onPress={() => this.props.navigation.navigate("UserProfile")}
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
          headerTitle: () => (
            <SearchInput
              onSearch={(text) => this.changeText(text)}
              value={this.state.search}
            />
          ),
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Checkout" component={Checkout} />

        {/* <Stack.Screen name="Checkout2" component={Checkout2} /> */}
      </Stack.Navigator>
    );
  }
}
