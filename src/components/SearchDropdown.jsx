import { Text, View, Image } from 'react-native';
import React from 'react';
import { COLORS } from '../styles/colors';
import { AntDesign } from '@expo/vector-icons';
import { containers, elements } from '../styles/HomeScreen/Components_SearchDropdown';

export default function SearchDropdown(props) {
  const { dataSource } = props;

  return (
    <View style={containers.dropDownContainer}>
      <View style={containers.noResultsContainer}>
        <Text style={elements.noResultsText}>
          <AntDesign name='close' size={14} color={COLORS.WHITE} /> No results found
        </Text>
      </View>
      {dataSource.map((item, index) => {
        return (
          <View style={containers.resultsContainer} key={index}>
            <Image source={{ uri: item.image }} style={elements.imageStyle} />
            <View style={containers.productContainer}>
              <Text style={elements.textStyle}>{item.name}</Text>
              <Text style={elements.textStyle}>{item.price}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}
