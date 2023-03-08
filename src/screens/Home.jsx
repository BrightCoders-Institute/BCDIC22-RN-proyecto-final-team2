import { Text, View, FlatList, ScrollView } from "react-native";
import React, { Component } from "react";
import ProductCard from "../components/ProductCard";
import CarouselSlider from "../components/CarouselSlider";
import { containers } from "../styles/HomeScreen/Screen_Home";
import { elements } from "../styles/HomeScreen/Screen_Home";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={containers.bgContainer}>
        <ScrollView>
          <Text style={elements.titleBestSellers}>
            Take a look at... {"\n"}the best sellers
          </Text>
          <CarouselSlider />
          <Text style={elements.titleRecentlyAdded}>Our recently added</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={containers.productsContainer}
            data={[0, 1, 2, 3]}
            ItemSeparatorComponent={() => (
              <View style={containers.itemSeparator} />
            )}
            renderItem={({ item }) => (
              <ProductCard
                product={{
                  name: "Iron Man",
                  franchise: "Marvel",
                  category: "Superheroes",
                  rating: 4,
                  price: 49.99,
                  image:
                    "https://findgure.s3.amazonaws.com/products/AlexG_1.png",
                }}
              />
            )}
          />
        </ScrollView>
      </View>
    );
  }
}
