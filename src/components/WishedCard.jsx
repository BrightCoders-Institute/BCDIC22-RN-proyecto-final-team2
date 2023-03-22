import { Text, View, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { AirbnbRating } from 'react-native-ratings';
import { COLORS } from '../styles/colors';
import { containers } from '../styles/HomeScreen/Components_ProductCard';
import { elements } from '../styles/HomeScreen/Components_ProductCard';

export default class WishedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false,
      error: null,/* 
      url: 'https://findgure.up.railway.app/api/product/favorite/', */
    };
  }
  render() {
    return (
      <View style={containers.mainContainer}>
        <TouchableOpacity
        /* onPress={() => {
        this.props.navigation.navigate('ProductDetails', {
        product: this.props.product,
        });
        }} */
        >
          <Image style={elements.productImage} source={{ uri: this.props.image }} />
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.setState({ isFavorite: !this.state.isFavorite });
            }}
          >
            <FontAwesome
              name={this.state.isFavorite ? 'heart' : 'heart-o'}
              size={24}
              color={COLORS.DARK_PURPLE}
              style={elements.favoriteIcon}
            />
          </TouchableOpacity>

          <Text style={elements.productTitle}>
            {this.props.name.length > 10
              ? this.props.name.substring(0, 7) + '...'
              : this.props.name}
          </Text>
          
          <Text style={elements.textFranchise}>
            Franchise:{' '}
            <Text style={elements.productFranchise}>
              {this.props.franchise.length > 10
                ? this.props.franchise.substring(0, 10) + '...'
                : this.props.franchise}
            </Text>
          </Text>
          <AirbnbRating
            showRating={false}
            size={15}
            defaultRating={this.props.rating}
            isDisabled={true}
            starContainerStyle={elements.productRating}
          />
          <Text style={elements.productPrice}>$ {this.props.price}</Text>
          <TouchableOpacity onButtonPress style={containers.buttonBuy}>
            <Text style={elements.textButtonBuy}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity onButtonPress style={containers.buttonAddToCart}>
            <Text style={elements.textButtonAddToCart}>Add to cart</Text>
            <Ionicons
              name='cart-outline'
              size={16}
              color={COLORS.DARK_PURPLE}
              style={elements.cartIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
