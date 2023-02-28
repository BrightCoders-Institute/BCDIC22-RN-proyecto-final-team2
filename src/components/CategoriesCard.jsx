import { Text, TouchableOpacity, Image } from 'react-native';
import React, { Component } from 'react';
import { containers } from '../styles/CategoriesScreen/Components_CategoriesCard';
import { elements } from '../styles/CategoriesScreen/Components_CategoriesCard';

export default class CategoriesCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity style={containers.container}>
        <Image style={elements.img} source={{ uri: this.props.category.image }} />
        <Text style={elements.textStyle}>{this.props.category.name}</Text>
      </TouchableOpacity>
    );
  }
}
