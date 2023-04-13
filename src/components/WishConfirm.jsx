import { Text, View, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react';
import { ConfirmedWish } from '../styles/WishlistScreen/Confirmed';

export default class WishConfirm extends Component{
  render() {
    return (
      <View style={ConfirmedWish.container}>
      <Text style={ConfirmedWish.message}> Succesfully <Text style={ConfirmedWish.added}>added</Text> to your wishlist. </Text>
      </View>
    )
  }
}
