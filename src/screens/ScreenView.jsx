import { Text, View, StyleSheet, Dimensions, StatusBar, ScrollView } from 'react-native';
import React, { Component} from 'react';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import { StylesHome } from '../styles/HomeScreen/Screen_Test';
import Home from './Home';
import { COLORS } from '../styles/colors';

export default class Test extends Component {
  render() {
    return (
      <View style={StylesHome.Home}>
        <View style={StylesHome.TopBar}>
          <TopBar />
        </View>

        <ScrollView style={StylesHome.Content}>
        <View>
          <Home/>
        </View>
        </ScrollView>

        <View style={StylesHome.BottomBar}>
          <BottomBar />
        </View>
      </View>
    );
  }
}