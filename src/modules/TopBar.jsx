import { Text, View, StyleSheet, TextInput } from 'react-native';
import React, { Component } from 'react';
import { FontAwesome, FontAwesome5, AntDesign }  from "@expo/vector-icons"

export default class TopBar extends Component {
  render() {
    return (
      <View style={styles.Bar}>
        <View style={styles.Cell}>
          <Text style={styles.Button}>
          <FontAwesome5 name="user-circle" style={styles.Icon} color="black" />
          </Text>
        </View>

        <View style={styles.SearchCell}>
          <View style={styles.SearchBar}>
          <Text style={styles.SearchButton}>
            <FontAwesome name="search" style={styles.SearchIcon}/>
            </Text>
          <TextInput style={styles.SearchInput}/>
          </View>
        </View>

        <View style={styles.Cell}>
          <Text style={styles.Button}>
            <AntDesign style={styles.Icon} name="shoppingcart"/>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    Bar:{
      backgroundColor: "white",
      height: 65,
      padding: 2,
      flexDirection: "row",
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
    SearchCell:{
      flex: 4,
      flexDirection: "row",
      alignItems: "center",
    },
    SearchBar:{
      width: "100%",
      height: 45,
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 50,
      flexDirection: "row",
    },
    SearchButton:{
      width: "100%",
      textAlignVertical: "center",
      padding: 10,
      flex: 1,
    },
    SearchInput:{
      height:"100%",
      padding: 5,
      flex: 7,
    },
    SearchIcon:{
      fontSize: 20,
      flex: 1,
    },
});