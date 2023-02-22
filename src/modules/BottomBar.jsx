import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { FontAwesome }  from "@expo/vector-icons"

export default class BottomBar extends Component {
  render() {
  return (
    <View>
    <View style={styles.Bar}>
      
      <View style={styles.Cell}>
      <View style={styles.SelectedBar}/>
        <Text style={styles.Button}><FontAwesome style={styles.Icon} name="home" color="purple"/></Text>
      </View>

      <View style={styles.Cell}>
      <View style={styles.NotSelectedBar}/>
        <Text style={styles.Button}><FontAwesome style={styles.Icon} name="th-large" color="purple"/></Text> 
      </View>

      <View style={styles.Cell}>
      <View style={styles.NotSelectedBar}/>
        <Text style={styles.Button}> <FontAwesome style={styles.Icon} name="heart" color="purple"/> </Text>
      </View>
    </View>
    </View>
    );
  }
}


const styles = StyleSheet.create({
    Bar:{
      flexDirection: "row",
      backgroundColor: "white",
    },
    Cell:{
      flex: 1,
      flexDirection: "row",
    },
    Button: {
      width: "100%",
      textAlign: "center",
      textAlignVertical: "center",
      padding: 10,
      flex: 1,
    },
    Icon:{
      fontSize: 35,
      padding: 20,
      flex: 1,
    },

    SelectedBar:{
      height: 5,
      width: "100%",
      backgroundColor: "magenta",
      position: "absolute"
    },

    NotSelectedBar:{
      height: 5,
      width: "100%",
      backgroundColor: "gray",
      position: "absolute"
    }
});