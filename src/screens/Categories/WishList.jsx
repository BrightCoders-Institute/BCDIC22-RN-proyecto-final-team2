import {
  Text,
  View,
  FlatList,
  ScrollView,
  SectionList,
  StyleSheet,
} from "react-native";
import React, { Component } from "react";
import { containers } from "../../styles/WishlistScreen/Screen_Wishlist";
import { titles } from "../../styles/WishlistScreen/Screen_Wishlist";
import WishedCard from "../../components/WishedCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProductCard from "../../components/ProductCard";

export default class Wishlist extends Component {
  constructor(props) {
    super(props);
    
    this.state = { wished: [], isLoading: false };
  }

  async getWishlist() {
    this.setState({ isLoading: true });
    const token = "Token " + (await AsyncStorage.getItem("token"));
    
    const config = {
      method: "GET",
      headers: {
        Authorization: token,
      },
    };
    try {
      const response = await fetch(
        "https://findgure.up.railway.app/api/product/favorite",
        config
      );
      const data = await response.json();
      
      this.setState({ wished: data.favorites });
      
    } catch (e) {}
    this.setState({ isLoading: false });
  }

  async UNSAFE_componentWillMount() {
    await this.getWishlist();
  }

  render() {
    const data = this.state.wished;
    return (
      
      <View>
        <Text style={titles.maintitle}> Wishlist </Text>
        <FlatList
        style={containers.listWishlist}
          data={data}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={containers.itemSeparator} />}
          renderItem={({ item }) => (
            <WishedCard
              name={item.name}
              rating={item.rating}
              price={item.price}
              image={item.image}
              franchise={item.franchise.name}
            />
          )}
        />
      </View>
    );
  }
}
