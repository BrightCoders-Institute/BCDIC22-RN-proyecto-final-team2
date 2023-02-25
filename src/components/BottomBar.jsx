import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { FontAwesome }  from "@expo/vector-icons"
import { StyleBottomBar } from '../styles/Bars/Component_BottomBar';
import { COLORS } from '../styles/colors';

export default class BottomBar extends Component {
  render() {
  return (
    <View>
    <View style={StyleBottomBar.Bar}>
      
      <View style={StyleBottomBar.Cell}>
      <View style={StyleBottomBar.SelectedBar}/>
        <Text style={StyleBottomBar.Button}><FontAwesome style={StyleBottomBar.Icon} name="home" color={COLORS.DARK_PURPLE}/></Text>
      </View>

      <View style={StyleBottomBar.Cell}>
      <View style={StyleBottomBar.NotSelectedBar}/>
        <Text style={StyleBottomBar.Button}><FontAwesome style={StyleBottomBar.Icon} name="th-large" color={COLORS.DARK_PURPLE}/></Text> 
      </View>

      <View style={StyleBottomBar.Cell}>
      <View style={StyleBottomBar.NotSelectedBar}/>
        <Text style={StyleBottomBar.Button}> <FontAwesome style={StyleBottomBar.Icon} name="heart" color={COLORS.DARK_PURPLE}/> </Text>
      </View>
    </View>
    </View>
    );
  }
}