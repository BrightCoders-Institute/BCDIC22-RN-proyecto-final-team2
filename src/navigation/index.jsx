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
import Checkout from "../screens/Checkout/Checkout1";
import Checkout2 from "../screens/Checkout/Checkout2";
import { COLORS } from "../styles/colors";
import LoggedNav from './loggedNav';
import NotLoggedNav from './notLoggedNav';
import { navTheme } from '../theme/themes';

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
          initialRouteName='NotLoggedNav'
          initialRouteName='LoggedNav'
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

          <Stack.Screen name="Checkout1" component={Checkout} />

          <Stack.Screen name="Checkout2" component={Checkout2} />

          <Stack.Screen name='NotLoggedNav' component={NotLoggedNav} />
          
          <Stack.Screen name='LoggedNav' component={LoggedNav} />

        </Stack.Navigator>
        
      </NavigationContainer>
    );
  }
}
