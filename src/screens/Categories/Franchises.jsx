import { Text, View, FlatList, ScrollView } from "react-native";
import React, { Component } from "react";
import { containers } from "../../styles/FranchisesScreen/Screen_Franchises";
import { titles } from "../../styles/FranchisesScreen/Screen_Franchises";
import { ProductItem } from "../../components/ProductItem";

export default class Franchises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      error: "",
    };
  }

  componentDidMount() {
    const { id } = this.props.route.params;
    fetch(`https://findgure.up.railway.app/api/franchises/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => {
        this.setState({ data: data });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
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
                    renderItem={({ item }) => {
                      return (
                        <ProductItem product={item} isFavorite={true} />
                      );
                    }}
                  />
                </ScrollView>
              </View>
            );
          }}
        />
      </View>
    );
  }
}
