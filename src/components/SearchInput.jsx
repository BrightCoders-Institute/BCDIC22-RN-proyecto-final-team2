import { View, TextInput } from 'react-native';
import React, { Component } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { containers } from '../styles/HomeScreen/Components_SearchInput';
import { elements } from '../styles/HomeScreen/Components_SearchInput';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={containers.inputContainer}>
        <FontAwesome name='search' style={elements.iconStyle} />
        <TextInput
          placeholder='Search'
          onChangeText={(text) => {
            this.props.onSearch(text);
          }}
          value={this.props.value}
          style={containers.inputSize}
        />
      </View>
    );
  }
}
