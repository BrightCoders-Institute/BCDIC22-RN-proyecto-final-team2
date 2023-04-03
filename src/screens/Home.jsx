import { Text, View, FlatList, ScrollView } from 'react-native';
import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';
import CarouselSlider from '../components/CarouselSlider';
import { containers } from '../styles/HomeScreen/Screen_Home';
import { elements } from '../styles/HomeScreen/Screen_Home';
import Loading from '../components/Loading';
import SearchDropdown from '../components/SearchDropdown';
import SearchInput from '../components/SearchInput';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: null,
    };
  }

  getProducts() {
    this.setState({ isLoading: true });
    fetch('https://findgure.up.railway.app/api/products')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then((data) => {
        this.setState({ products: data });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getProducts();
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
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("OnProductDetail", {
                        screen: "ProductDetail",
                        params: { id: product.id },
                      });
                    }}
                  >
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      category={product.franchise.category}
                      franchise={product.franchise.name}
                      price={product.price}
                      rating={product.rating}
                      image={product.image}
                    />
                  </TouchableOpacity>

                );
              }}
            />
          ) : (
            <Loading />
          )}
          {this.props.searching && <SearchDropdown dataSource={this.props.filtered} />}
        </ScrollView>
      </View>
    );
  }
}
