import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Greeting from '../screens/Greeting';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Constants from 'expo-constants';

const Stack = createNativeStackNavigator();

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <StatusBar style='auto' />
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Greeting' component={Greeting} />

          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
