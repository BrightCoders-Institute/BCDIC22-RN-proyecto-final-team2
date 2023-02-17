import { Text, View } from 'react-native';
import React, { Component } from 'react';
import Constants from 'expo-constants';

export default class Greeting extends Component {
  render() {
    return (
      <View style={{ marginTop: Constants.statusBarHeight }}>
        <Text>Greeting</Text>
      </View>
    );
  }
}
