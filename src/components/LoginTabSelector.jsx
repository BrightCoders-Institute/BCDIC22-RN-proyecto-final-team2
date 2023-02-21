import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { containers } from '../styles/LoginScreen/Components_TabSelector';
import { content } from '../styles/LoginScreen/Components_TabSelector';

export default class LoginTabSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 'login',
    };
  }
  render() {
    return (
      <View style={containers.containerSelector}>
        <View style={containers.containerLogo}>
          <Image source={require('../resources/Logo.png')} style={content.logo} />

          <View style={containers.containerElements}>
            <TouchableOpacity
              style={{
                borderBottomColor: '#7419CF',
                borderBottomWidth: this.props.screen.state.form === 'login' ? 2 : 0,
                width: 100,
                alignContent: 'center',
                alignItems: 'center',
              }}
              onPress={this.props.screen.handler}
            >
              <Text style={content.loginText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderBottomColor: '#7419CF',
                borderBottomWidth: this.props.screen.state.form !== 'login' ? 2 : 0,
                width: 100,
                alignContent: 'center',
                alignItems: 'center',
              }}
              onPress={this.props.screen.handler}
            >
              <Text style={content.registerText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
