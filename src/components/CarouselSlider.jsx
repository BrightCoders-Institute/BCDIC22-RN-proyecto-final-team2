import { Text, View, Image, ScrollView, Dimensions } from 'react-native';
import React, { Component } from 'react';
import { containers } from '../styles/HomeScreen/Components_CarouselSlider';
import { stateIndicator } from '../styles/HomeScreen/Components_CarouselSlider';

export default class CarouselSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }

  changeState = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  };

  render() {
    const { width } = Dimensions.get('screen');
    const height = width * 0.5;
    const images = [
      'https://images4.alphacoders.com/100/thumb-1920-1004017.png',
      'https://i.pinimg.com/originals/cf/a8/21/cfa821cd8213ac508b9fe968d1dbcb43.jpg',
      'https://preview.redd.it/f2d4po3oiaj81.jpg?auto=webp&s=3d821397a23c8a7131fb4752d50268f73ea6f13f',
    ];
    return (
      <View style={{ marginTop: 60, width, height }}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.changeState}
          showsHorizontalScrollIndicator={false}
          style={{ width, height }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={{ width, height, resizeMode: 'contain' }}
            />
          ))}
        </ScrollView>
        <View style={containers.containerIndicator}>
          {images.map((i, k) => (
            <Text
              key={k}
              style={
                k == this.state.active ? stateIndicator.stateActive : stateIndicator.stateInactive
              }
            >
              ⬤
            </Text>
          ))}
        </View>
      </View>
    );
  }
}
