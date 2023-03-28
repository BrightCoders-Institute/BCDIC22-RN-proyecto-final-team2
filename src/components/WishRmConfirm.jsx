import { Text, View, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react';
import { ConfirmedWish } from '../styles/WishlistScreen/Confirmed';

export default class WishRmConfirm extends Component{
    render() {
        return (
        <View style={ConfirmedWish.container}>
        <Text style={ConfirmedWish.message}> Succesfully <Text style={ConfirmedWish.removed}>removed</Text> from your wishlist. </Text>
        </View>
        )
    }
}