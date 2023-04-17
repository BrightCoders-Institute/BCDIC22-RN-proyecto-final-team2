import { Text, View, FlatList, ScrollView, TouchableOpacity, } from "react-native";
import React, { Component } from "react";
import { containers } from "../../styles/FranchisesScreen/Screen_Franchises";
import { titles } from "../../styles/FranchisesScreen/Screen_Franchises";
import { ProductItem } from "../../components/ProductItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchDropdown from '../../components/SearchDropdown';

export default class Franchises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      error: "",
    };
  }

  async getProducts() {
    this.setState({ isLoading: true });
    const { id } = this.props.route.params;

    await fetch("https://findgure.up.railway.app/api/product/favorite", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + (await AsyncStorage.getItem("token")),
      },
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong ...");
      }
    })
    .then((data) => {
      data = data.favorites.map((item) => item.id);
      this.setState({ favorites: data });
    })
    .catch((error) => this.setState({ error, isLoading: false }));

    fetch(`https://findgure.up.railway.app/api/franchises/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => {
        this.setState({ data: data,products: data, favorites: this.state.favorites  });
      })
      .catch((error) => this.setState({ error, isLoading: false }));

  }

  async componentDidMount() {
    await this.getProducts();
  }

  render() {
    const { category } = this.props.route.params;
    const { data } = this.state;
    return (
      <View style={containers.bgContainer}>
        <Text style={titles.maintitle}>{category} Category</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.franchise}
          renderItem={({ item }) => {
            return (
              <View style={containers.franchiseCards}>
                <Text style={titles.titleFranchise}>{item.franchise}</Text>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={item.products}
                    ItemSeparatorComponent={() => (
                      <View style={containers.itemSeparator} />
                    )}
                    renderItem={({ item:product }) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            this.props.navigation.navigate("OnProductDetail", {
                              screen: "ProductDetail",
                              params: { id: product.id },
                            });
                          }}
                        >
                          <ProductItem product={product} isFavorite={this.state.favorites.includes(product.id)} />
                        </TouchableOpacity>
                      );
                    }}
                  />
                </ScrollView>
              </View>
            );
          }}
        />
        {this.props.searching && <SearchDropdown dataSource={this.props.filtered} />}
      </View>
    );
  }
}
