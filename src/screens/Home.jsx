import { Text, View, FlatList, ScrollView } from 'react-native';
import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';
import CarouselSlider from '../components/CarouselSlider';
import { containers } from '../styles/HomeScreen/Screen_Home';
import { elements } from '../styles/HomeScreen/Screen_Home';
import Loading from '../components/Loading';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      favorites: [],
      error: null,
    };
  }

  async getProducts() {
    this.setState({ isLoading: true });

    await fetch('https://findgure.up.railway.app/api/product/favorite', 
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Token " + (await AsyncStorage.getItem("token"))
      }
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    }).then((data) => {
      // we have a array of objects, we need to map it to an array of ids
      data = data.favorites.map((item) => item.id);
      this.setState({ favorites: data });
    }).catch((error) => this.setState({ error, isLoading: false }));

    await fetch('https://findgure.up.railway.app/api/products')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
    .then((data) => {
      this.setState({ products: data, favorites: this.state.favorites });
    })
    .catch((error) => this.setState({ error, isLoading: false }));


  }

  async componentDidMount() {
    await this.getProducts();
  }

  render() {
    const { products, error, isLoading } = this.state;
    return (
      <View style={containers.bgContainer}>
        <ScrollView>
          <Text style={elements.titleBestSellers}>
            Take a look at... {'\n'}
            <Text style={elements.subtitleBestSellers}>The best sellers</Text>
          </Text>
          {products.length > 0 ? <CarouselSlider products={products} /> : <Loading />}

          <Text style={elements.titleRecentlyAdded}>Our recently added</Text>
          {products.length > 0 ? (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={containers.productsContainer}
              data={products}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <View style={containers.itemSeparator} />}
              renderItem={({ item: product }) => {
                return (
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    franchise={product.franchise.name}
                    price={product.price}
                    rating={product.rating}
                    image={product.image}
                    favorite={this.state.favorites.includes(product.id)}
                  />
                );
              }}
            />
          ) : (
            <Loading />
          )}
        </ScrollView>
      </View>
    );
  }
}
