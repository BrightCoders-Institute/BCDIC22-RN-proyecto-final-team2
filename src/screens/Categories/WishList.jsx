import {Text, View, FlatList, ScrollView, SectionList, StyleSheet,} from "react-native";
  import React, { Component } from "react";
  import ProductCard from "../../components/ProductCard";
  import { containers } from "../../styles/WishlistScreen/Screen_Wishlist";
  import { titles } from "../../styles/WishlistScreen/Screen_Wishlist";
  
  const sections = [
    {
      title: "Wishlist",
      data: [
        {
          name: "Iron Man",
          franchise: "Marvel",
          category: "Superheroes",
          rating: 6,
          price: 99.99,
          image: "https://findgure.s3.amazonaws.com/products/AlexG_1.png",
        },
        {
          name: "Iron Man",
          franchise: "Marvel",
          category: "Superheroes",
          rating: 4,
          price: 49.99,
          image: "https://findgure.s3.amazonaws.com/products/AlexG_1.png",
        },
        {
          name: "Iron Man",
          franchise: "Marvel",
          category: "Superheroes",
          rating: 4,
          price: 49.99,
          image: "https://findgure.s3.amazonaws.com/products/AlexG_1.png",
        },
        {
          name: "Iron Man",
          franchise: "Marvel",
          category: "Superheroes",
          rating: 4,
          price: 49.99,
          image: "https://findgure.s3.amazonaws.com/products/AlexG_1.png",
        },
      ],
    },
  ];
  
  export default class Wishlist extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <View style={containers.bgContainer}>
          <ScrollView nestedScrollEnabled={true}>
            <SectionList
              renderSectionHeader={({ section: { title } }) => (
                <Text style={titles.titleFranchise}>{title}</Text>
              )}
              sections={sections}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => {
                return (                  
                    <FlatList
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={containers.productsContainer}
                      data={[item]}
                      ItemSeparatorComponent={() => (
                        <View style={containers.itemSeparator} />
                      )}
                      renderItem={({ item }) => <ProductCard product={item} />}
                    />
                      );
              }}
            />
          </ScrollView>
        </View>
      );
    }
  }
  