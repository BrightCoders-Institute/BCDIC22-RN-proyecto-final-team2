import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Checkout from '../screens/Checkout';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import UserProfile from '../screens/UserProfile';
import SearchInput from '../components/SearchInput';
import Checkout from '../screens/Checkout/Checkout1';
import Checkout2 from '../screens/Checkout/Checkout2';

const Stack = createNativeStackNavigator();

export default class OnCheckout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator
        initialRouteName='Checkout'
        screenOptions={{
          headerShown: true,
          headerLeft: (props) => (
            <FontAwesome5
              onPress={() => this.props.navigation.navigate('UserProfile')}
              name='user-circle'
              size={30}
              color={props.tintColor}
            />
          ),
          headerRight: (props) => (
            <AntDesign name='shoppingcart' size={30} color={props.tintColor} />
          ),
        }}
      >
        <Stack.Screen name='Checkout' component={Checkout} />
        <Stack.Screen name='Checkout2' component={Checkout2} />
      </Stack.Navigator>
    );
  }
}
