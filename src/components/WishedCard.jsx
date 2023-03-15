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
    };
  }
  render() {
    return (
      <View style={containers.mainContainer}>
        <TouchableOpacity
        // onPress={() => {
        //   this.props.navigation.navigate('ProductDetails', {
        //     product: this.props.product,
        //   });
        // }}
        >
          <Image style={elements.productImage} source={{ uri: this.props.product.image }} />
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
              color='crimson'
              style={elements.favoriteIcon}
            />
          </TouchableOpacity>

          <Text style={elements.productTitle}>{this.props.product.name}</Text>
          <Text style={elements.textEdition}>
            Edition: {this.props.product.edition}
          </Text>
          <AirbnbRating
            showRating={false}
            size={15}
            defaultRating={this.props.product.rating}
            isDisabled={true}
            starContainerStyle={elements.productRating}
          />
          <Text style={elements.textCategory}>
            <Text style={elements.productReviewsCount}>{this.props.product.reviews} reviews</Text>
          </Text>
          <Text style={elements.productPrice}>$ {this.props.product.price}</Text>
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
