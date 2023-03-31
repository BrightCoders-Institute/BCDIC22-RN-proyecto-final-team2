import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OnCategories from './onCategories';
import OnHome from './onHome';
import OnWishlist from './onWishlist';
import { FontAwesome5, FontAwesome, AntDesign } from '@expo/vector-icons';
import UserProfile from '../screens/UserProfile';
import Checkout from '../screens/Checkout/Checkout1';
import Checkout2 from '../screens/Checkout/Checkout2';
import onCart from './onCart';

const Tab = createBottomTabNavigator();

export default class LoggedNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tab.Navigator
        initialRouteName='OnHome'
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          headerTitle: '',
        }}
      >
        <Tab.Screen
          name='OnHome'
          component={OnHome}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name={'home'} size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name='OnCategories'
          component={OnCategories}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name={'th-large'} size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name='OnWishlist'
          component={OnWishlist}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name={'heart'} size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name='UserProfile'
          component={UserProfile}
          options={{
            headerShown: true,
            tabBarButton: () => null,
            headerLeft: (props) => (
              <FontAwesome5
                name='user-circle'
                style={{ marginLeft: 15 }}
                size={30}
                color={props.tintColor}
              />
            ),
            headerRight: (props) => (
              <AntDesign
                onPress={() => this.props.navigation.navigate('Cart')}
                name='shoppingcart'
                size={30}
                style={{ marginRight: 15 }}
                color={props.tintColor}
              />
            ),
          }}
        />

        <Tab.Screen
          name='onCart'
          component={onCart}
          options={{
            headerShown: true,
            headerBackVisible: false,
            tabBarButton: () => null,
            headerLeft: (props) => (
              <FontAwesome5
                onPress={() => this.props.navigation.navigate('UserProfile')}
                name='user-circle'
                style={{ marginLeft: 15 }}
                size={30}
                color={props.tintColor}
              />
            ),
            headerRight: (props) => (
              <AntDesign
                name='shoppingcart'
                size={30}
                style={{ marginRight: 15 }}
                color={props.tintColor}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
