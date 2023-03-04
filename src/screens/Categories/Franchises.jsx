import {
  Text,
  View,
  FlatList,
  ScrollView,
  SectionList,
  StyleSheet,
} from "react-native";
import React, { Component } from "react";
import ProductCard from "../../components/ProductCard";
import { containers } from "../../styles/FranchisesScreen/Screen_Franchises";
import { titles } from "../../styles/FranchisesScreen/Screen_Franchises";

// const datos = [
//   {
//     Marvel: [
//       {
//         name: "Iron Man",
//         franchise: "Marvel",
//         category: "Superheroes",
//         rating: 4,
//         price: 49.99,
//         image: "https://findgure.s3.amazonaws.com/products/AlexG_1.png",
//       },
//       {
//         name: "Iron Man",
//         franchise: "Marvel",
//         category: "Superheroes",
//         rating: 4,
//         price: 49.99,
//         image: "https://findgure.s3.amazonaws.com/products/AlexG_1.png",
//       },
//     ],
//   },
//   {
//     DC: {
//       name: "Iron Man",
//       franchise: "Marvel",
//       category: "Superheroes",
//       rating: 4,
//       price: 49.99,
//       image: "https://findgure.s3.amazonaws.com/products/AlexG_1.png",
//     },
//   },
// ];

const sections = [
  {
    title: "Marvel",
    data: [
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
  {
    title: "DC",
    data: [
      {
        name: "Batman",
        franchise: "DC",
        category: "Superheroes",
        rating: 4.5,
        price: 59.99,
        image: "https://findgure.s3.amazonaws.com/products/AlexG_1.png",
      },
      {
        name: "Batman",
        franchise: "DC",
        category: "Superheroes",
        rating: 4.5,
        price: 59.99,
        image: "https://findgure.s3.amazonaws.com/products/AlexG_1.png",
      },
      {
        name: "Batman",
        franchise: "DC",
        category: "Superheroes",
        rating: 4.5,
        price: 59.99,
        image: "https://findgure.s3.amazonaws.com/products/AlexG_1.png",
      },
      {
        name: "Batman",
        franchise: "DC",
        category: "Superheroes",
        rating: 4.5,
        price: 59.99,
        image: "https://findgure.s3.amazonaws.com/products/AlexG_1.png",
      },
    ],
  },
];

export default class Franchises extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={containers.bgContainer}>
        <ScrollView nestedScrollEnabled={true}>
          <SectionList
            sections={sections}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => {
              return (
                <ScrollView horizontal={true}>
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
                </ScrollView>
              );
            }}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={titles.titleFranchise}>{title}</Text>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}
