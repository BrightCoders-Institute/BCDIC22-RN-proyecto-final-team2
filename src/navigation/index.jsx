import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Greeting from "../screens/Greeting";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Categories from "../screens/Categories/Categories";
import Franchises from "../screens/Categories/Franchises";
import UserProfile from "../screens/UserProfile";
import Checkout from "../screens/Checkout";
import { COLORS } from "../styles/colors";

const Stack = createNativeStackNavigator();

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <StatusBar style="light" backgroundColor={COLORS.DARK_PURPLE} />
        <Stack.Navigator
          initialRouteName="Checkout"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Greeting" component={Greeting} />

          <Stack.Screen name="Login" component={Login} />

          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen name="UserProfile" component={UserProfile} />

          <Stack.Screen name="Categories" component={Categories} />

          <Stack.Screen name="Franchises" component={Franchises} />

          <Stack.Screen name="Checkout" component={Checkout} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
