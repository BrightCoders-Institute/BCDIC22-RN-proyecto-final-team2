import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { COLORS } from '../styles/colors';

export default function SearchDropdown(props) {
  const { dataSource } = props;

  return (
    <View
      style={{
        position: 'absolute',
        alignContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderColor: COLORS.LIGHT_PURPLE,
        borderWidth: 1,
        width: 233,
        height: 200,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
      }}
    >
      <View style={{ flexWrap: 'wrap', marginHorizontal: 20, backgroundColor: 'gray' }}>
        {dataSource.map((item) => {
          return <Text style={{ color: 'black' }}>{item}</Text>;
        })}
      </View>
    </View>
  );
}
