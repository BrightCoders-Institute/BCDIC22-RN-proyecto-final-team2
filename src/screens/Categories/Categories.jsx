import { Text, View, FlatList, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import CategoriesCard from '../../components/CategoriesCard';
import { containers } from '../../styles/CategoriesScreen/Screen_Categories';
import { elements } from '../../styles/CategoriesScreen/Screen_Categories';

export default class Categories extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={containers.container}>
        <Text style={elements.namePageText}>Categories</Text>
        <FlatList
          contentContainerStyle={containers.flatListCont}
          numColumns={2}
          columnWrapperStyle={containers.wrapperStyle}
          data={[0, 1, 2, 3, 4, 5]}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Franchises', { name: 'Anime' })}
            >
              <CategoriesCard
                category={{
                  name: 'Anime',
                  image: 'https://findgure.s3.amazonaws.com/products/AlexG_1.png',
                }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
