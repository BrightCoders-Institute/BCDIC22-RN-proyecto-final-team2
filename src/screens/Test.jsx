import { Text, View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import React, { Component} from 'react';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import { StylesHome } from '../styles/HomeScreen/Screen_Test';
import { COLORS } from '../styles/colors';

export default class Test extends Component {
  render() {
    return (
      <View style={StylesHome.Home}>
        <View style={StylesHome.TopBar}>
          <TopBar />
        </View>

        <View style={StylesHome.Content}>
          <Text style={{color:COLORS.WHITE}}>Espacio para el contenido</Text>
        </View>

        <View style={StylesHome.BottomBar}>
          <BottomBar />
        </View>
      </View>
    );
  }
}