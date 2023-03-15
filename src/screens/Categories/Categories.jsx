import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import CategoriesCard from '../../components/CategoriesCard';
import { containers } from '../../styles/CategoriesScreen/Screen_Categories';
import { elements } from '../../styles/CategoriesScreen/Screen_Categories';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  getCategories() {
    fetch('https://findgure.up.railway.app/api/categories/')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then((data) => {
        this.setState({ categories: data });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getCategories();
  }
  render() {
    return (
      <View style={containers.container}>
        <Text style={elements.namePageText}>Categories</Text>
        {this.state.categories.length > 0 ? (
          <FlatList
            contentContainerStyle={containers.flatListCont}
            numColumns={2}
            columnWrapperStyle={containers.wrapperStyle}
            data={this.state.categories}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Franchises', {
                      id: item.id,
                      category: item.name,
                    })
                  }
                >
                  {this.state.categories.length > 0 && (
                    <CategoriesCard name={item.name} image={item.image} />
                  )}
                </TouchableOpacity>
              );
            }}
          />
        ) : (
          <View style={elements.loadingContainer}>
            <Text style={elements.loadingText}>Loading...</Text>
          </View>
        )}
      </View>
    );
  }
}
