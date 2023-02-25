import { Text, View, StyleSheet, TextInput } from 'react-native';
import React, { Component } from 'react';
import { FontAwesome, FontAwesome5, AntDesign }  from "@expo/vector-icons"
import { StyleTopBar } from '../styles/Bars/Component_TopBar';
import { COLORS } from '../styles/colors';

export default class TopBar extends Component {
  render() {
    return (
      <View style={StyleTopBar.Bar}>
        <View style={StyleTopBar.Cell}>
          <Text style={StyleTopBar.Button}>
          <FontAwesome5 name="user-circle" style={StyleTopBar.Icon} color={COLORS.GRAY} />
          </Text>
        </View>

        <View style={StyleTopBar.SearchCell}>
          <View style={StyleTopBar.SearchBar}>
          <Text style={StyleTopBar.SearchButton}>
            <FontAwesome name="search" style={StyleTopBar.SearchIcon}/>
            </Text>
          <TextInput style={StyleTopBar.SearchInput}/>
          </View>
        </View>

        <View style={StyleTopBar.Cell}>
          <Text style={StyleTopBar.Button}>
            <AntDesign style={StyleTopBar.Icon} name="shoppingcart" color={COLORS.GRAY}/>
          </Text>
        </View>
      </View>
    );
  }
}