import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../styles/colors";
import LoggedNav from "./loggedNav";
import NotLoggedNav from "./notLoggedNav";
import { navTheme } from "../theme/themes";
import Checkout from "../screens/Checkout/Checkout1";
import Checkout2 from "../screens/Checkout/Checkout2";

const Stack = createNativeStackNavigator();

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer theme={navTheme}>
        <StatusBar style='light' backgroundColor={COLORS.DARK_PURPLE} />
        <Stack.Navigator

          initialRouteName='LoggedNav'

          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='NotLoggedNav' component={NotLoggedNav} />
          <Stack.Screen name='LoggedNav' component={LoggedNav} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
