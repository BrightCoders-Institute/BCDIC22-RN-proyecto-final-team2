import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import ItemCart from '../components/ItemCart';
import { COLORS } from '../styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { containers, elements } from '../styles/CartScreen/Screen_Cart';

export default class Cart extends Component {
  render() {
    return (
      <View style={containers.mainContainer}>
        <Text style={elements.titleText}>My cart</Text>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          ItemSeparatorComponent={() => <View style={elements.itemSeparatorStyle} />}
          renderItem={({ item }) => {
            return (
              <ItemCart
                image='https://cdn.shopify.com/s/files/1/2437/4099/products/iron-man-mark-lxxxv-holographic-version_marvel_silo_480x1000.png?v=1669930304'
                name='Iron Man'
                franchise='Marvel'
                category='Superheroes'
                price='20'
                description='Figura de accion coleccionable del hombre de acero, con caracteristicas realistas y un gran modelado'
              />
            );
          }}
        />
        <TouchableOpacity style={containers.buttonContainer}>
          <Text style={elements.buttonText}>Checkout</Text>
          <MaterialIcons name='navigate-next' size={30} color={COLORS.DARK_PURPLE} />
        </TouchableOpacity>
      </View>
    );
  }
}
