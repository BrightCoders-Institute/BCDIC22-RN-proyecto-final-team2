import { Text, View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import React, { Component } from 'react';
import Constants from 'expo-constants';

import TopBar from '../modules/TopBar';
import BottomBar from '../modules/BottomBar';

export default class Home extends Component {
  render() {
    return (
      <View style={{ marginTop: Constants.statusBarHeight, height:"100%", backgroundColor: "purple"}}>
        <View style={styles.TopBar}>
          <TopBar />
        </View>

        <View style={styles.Content}>
          <Text style={{color:"white"}}>Espacio para el contenido</Text>
        </View>

        <View style={styles.BottomBar}>
          <BottomBar />
        </View>
      </View>
    );
  }
}

const SCREEN_HEIGHT = Dimensions.get('screen').height; // device height
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24; 
const WINDOW_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  TopBar:{
    width: "100%",
    position: "relative",
  },
  Content:{    
    width: "100%",
    position: "absolute",
    height: WINDOW_HEIGHT,
    top: 65,
  },
  BottomBar:{
    width: "100%",
    position: "absolute",
    bottom: SCREEN_HEIGHT-(2*STATUS_BAR_HEIGHT+WINDOW_HEIGHT),
  },
});
