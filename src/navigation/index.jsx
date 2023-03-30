import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from '../styles/colors';
import LoggedNav from './loggedNav';
import NotLoggedNav from './notLoggedNav';

import WishConfirm from '../components/WishConfirm';
import WishRmConfirm from '../components/WishRmConfirm';

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
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='NotLoggedNav' component={NotLoggedNav} />
          <Stack.Screen name='LoggedNav' component={LoggedNav} />
          <Stack.Screen name='WishConfirm' component={WishConfirm} />
          <Stack.Screen name='WishRmConfirm' component={WishRmConfirm} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
