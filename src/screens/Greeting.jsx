import { Text, View, Image, Pressable } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../styles/colors';
import { containers } from '../styles/LoginScreen/Screen_Login';
import { stylesGreeting } from '../styles/GreetingScreen/Screen_Greeting';
import { textDefault, text2 } from '../styles/GreetingScreen/Component_Text';

export default class Greeting extends Component {
  render() {
    return (
      <View style={containers.container}>
        <LinearGradient
          colors={[COLORS.DARK_PURPLE, COLORS.PURPLE]}
          style={containers.containerColor}
        >
          <View>
            <View style={stylesGreeting.containerLogo}>
              <Image source={require('../resources/Logo.png')} />
                <View style={stylesGreeting.containerTexts}>
                  <Text style={textDefault.text}>Join the Adventure,</Text>
                  <Text style={text2.text2}>Collect Today!</Text>
                </View>
            </View>
                    <Pressable
                      style={stylesGreeting.startedButton}
                    >
                      <Text style={stylesGreeting.textButton}>Get started</Text>
                    </Pressable>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
