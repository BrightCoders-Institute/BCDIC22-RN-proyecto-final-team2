import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OnCategories from "./onCategories";
import OnHome from "./onHome";
import OnCart from "./onCart";
import OnWishlist from "./onWishlist";
import { FontAwesome5, FontAwesome, AntDesign } from "@expo/vector-icons";
import UserProfile from "../screens/UserProfile";
import Cart from "../screens/Cart";
import OnCheckout from "./onCheckout";
import OnProductDetail from "./onProductDetail";
import { navigations } from "../styles/NavStyles";

const Tab = createBottomTabNavigator();
export default class LoggedNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tab.Navigator
        initialRouteName="OnHome"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          headerTitle: "",
        }}
      >
        <Tab.Screen
          name="OnHome"
          component={OnHome}
          options={{
            unmountOnBlur: true,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name={"home"} size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="OnProductDetail"
          component={OnProductDetail}
          options={{
            headerShown: true,
            headerBackVisible: false,
            tabBarButton: () => null,
            headerLeft: (props) => (
              <FontAwesome5
                onPress={() => this.props.navigation.navigate("UserProfile")}
                name="user-circle"
                style={navigations.iconUser}
                size={30}
                color={props.tintColor}
              />
            ),
            headerRight: (props) => (
              <AntDesign
                name="shoppingcart"
                size={30}
                style={navigations.iconcart}
                color={props.tintColor}
              />
            ),
          }}
        />

        <Tab.Screen
          name="OnCategories"
          component={OnCategories}
          options={{
            unmountOnBlur: true,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name={"th-large"} size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="OnWishlist"
          component={OnWishlist}
          options={{
            unmountOnBlur: true,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name={"heart"} size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="UserProfile"
          component={UserProfile}
          options={{
            unmountOnBlur: true,
            headerShown: true,
            tabBarButton: () => null,
            headerLeft: (props) => (
              <FontAwesome5
                onPress={() => this.props.navigation.navigate("UserProfile")}
                name="user-circle"
                style={navigations.iconUser}
                size={30}
                color={props.tintColor}
              />
            ),
            headerRight: (props) => (
              <AntDesign
                onPress={() => this.props.navigation.navigate("Cart")}
                name="shoppingcart"
                size={30}
                style={navigations.iconcart}
                color={props.tintColor}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: true,
            tabBarButton: () => null,
            headerLeft: (props) => (
              <FontAwesome5
                onPress={() => this.props.navigation.navigate("UserProfile")}
                name="user-circle"
                style={navigations.iconUser}
                size={30}
                color={props.tintColor}
              />
            ),
            headerRight: (props) => (
              <AntDesign
                onPress={() => this.props.navigation.navigate("Cart")}
                name="shoppingcart"
                size={30}
                style={navigations.iconcart}
                color={props.tintColor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="OnCheckout"
          component={OnCheckout}
          options={{
            headerShown: false,
            tabBarButton: () => null,
            headerLeft: (props) => (
              <FontAwesome5
                onPress={() => this.props.navigation.navigate("UserProfile")}
                name="user-circle"
                style={navigations.iconUser}
                size={30}
                color={props.tintColor}
              />
            ),
            headerRight: (props) => (
              <AntDesign
                name="shoppingcart"
                size={30}
                style={navigations.iconcart}
                color={props.tintColor}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
