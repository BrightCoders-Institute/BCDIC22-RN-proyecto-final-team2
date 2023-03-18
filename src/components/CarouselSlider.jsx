import { Text, View, Image, ScrollView, Dimensions } from 'react-native';
import React, { Component } from 'react';
import { containers } from '../styles/HomeScreen/Components_CarouselSlider';
import { stateIndicator } from '../styles/HomeScreen/Components_CarouselSlider';

const { width } = Dimensions.get('screen');
const height = width * 0.5;

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
    let count = -1;
    return (
      <View style={{ marginTop: 10, width, height }}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.changeState}
          showsHorizontalScrollIndicator={false}
          style={{ width, height }}
        >
          {this.props.products.map((product, index) => {
            return (
              product.best_seller && (
                <Image
                  key={index}
                  source={{ uri: product.best_seller_image }}
                  style={{ width, height, resizeMode: 'cover' }}
                />
              )
            );
          })}
        </ScrollView>
        <View style={containers.containerIndicator}>
          {this.props.products.map((product, k) => {
            if (product.best_seller) {
              count++;
              return (
                <Text
                  key={count}
                  style={
                    count == this.state.active
                      ? stateIndicator.stateActive
                      : stateIndicator.stateInactive
                  }
                >
                  ⬤
                </Text>
              );
            }
          })}
        </View>
      </View>
    );
  }
}
