import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../styles/colors';
import { containers } from '../styles/LoginScreen/Screen_Login';
import { stylesGreeting } from '../styles/GreetingScreen/Screen_Greeting';

export default class Greeting extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={containers.container}>
        <LinearGradient
          colors={[COLORS.DARK_PURPLE, COLORS.PURPLE]}
          style={containers.containerColor}
        >
          <View style={stylesGreeting.mainContainer}>
            <View>
              <Image source={require('../resources/Logo.png')} />
            </View>
            <View>
              <Text style={stylesGreeting.textStyle}>
                Join the Adventure, {'\n'} Collect Today!
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
              style={stylesGreeting.startedButton}
            >
              <Text style={stylesGreeting.textButton}>Get started</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
