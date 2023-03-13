import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Greeting from '../screens/Greeting';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

export default class NotLoggedNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator
        initialRouteName='Greeting'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Greeting' component={Greeting} />

        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
    );
  }
}
