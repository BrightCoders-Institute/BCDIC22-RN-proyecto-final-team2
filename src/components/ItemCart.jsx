import { Text, View, Pressable, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { COLORS } from '../styles/colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { containers, elements } from '../styles/CartScreen/Components_ItemCart';
import Counter from 'react-native-counters';

export default class ItemCart extends Component {
  constructor(props) {
    super(props);
  }
  onChange(number, type) {}
  render() {
    return (
      <View style={containers.cardContainer}>
        <View style={containers.itemsContainer}>
          <View style={containers.imageContainer}>
            <Pressable>
              <Image style={elements.imageStyles} source={{ uri: this.props.image }} />
            </Pressable>
          </View>

          <View style={containers.productDetails}>
            <Text style={elements.titleText}>
              {this.props.name.length > 10
                ? this.props.name.substring(0, 7) + '...'
                : this.props.name}
            </Text>
            <Text style={elements.franchiseText}>
              Franchise:{' '}
              <Text style={elements.productFranchise}>
                {this.props.franchise.length > 10
                  ? this.props.franchise.substring(0, 10) + '...'
                  : this.props.franchise}
              </Text>
            </Text>
            <Text style={elements.categoryText}>
              Category: <Text style={elements.productCategory}>{this.props.category}</Text>
            </Text>
            <Text style={elements.priceText}>$ {this.props.price + '.00'}</Text>
            <Text style={elements.descriptionText}>
              {this.props.description.length > 30
                ? this.props.description.substring(0, 30) + '...'
                : this.props.description}
            </Text>
          </View>

          <View style={containers.buttonsContainer}>
            <View style={containers.counterContainer}>
              <Counter
                start={1}
                min={1}
                max={5}
                buttonStyle={elements.counterButtonStyle}
                buttonTextStyle={elements.counterButtonTextStyle}
                countTextStyle={elements.counterCountTextStyle}
                onChange={this.onChange.bind(this)}
              />
            </View>
            <TouchableOpacity>
              <FontAwesome5
                name='trash-alt'
                size={20}
                color={COLORS.DARK_PURPLE}
                style={elements.deleteButtonStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
