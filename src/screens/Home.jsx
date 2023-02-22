import { Text, View } from 'react-native';
import React, { Component } from 'react';
import Constants from 'expo-constants';

import TopBar from '../modules/TopBar';
import BottomBar from '../modules/BottomBar';

export default class Home extends Component {
  render() {
    return (
      <View style={{ marginTop: Constants.statusBarHeight, height:"100%"}}>
        <TopBar />
        <Text>Relleno XD</Text>
        <BottomBar />
      </View>
    );
  }
}
