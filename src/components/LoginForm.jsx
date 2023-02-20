import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { containers } from '../styles/LoginScreen/Components_Login';
import { formLogin } from '../styles/LoginScreen/Components_Login';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={containers.containerLoginForm}>
        <TextInput
          onChangeText={(text) => {
            this.props.onEmailChange(text);
          }}
          value={this.props.value}
          style={formLogin.inputEmail}
          placeholder='Email'
        />
        <TextInput
          onChangeText={(text) => {
            this.props.onPasswordChange(text);
          }}
          value={this.props.value}
          style={formLogin.inputPassword}
          secureTextEntry={true}
          placeholder='Password'
        />

        <TouchableOpacity onButtonPress style={formLogin.buttonContainer}>
          <Text style={formLogin.buttonText}>{this.props.text}</Text>
        </TouchableOpacity>

        <Text style={formLogin.askText}>Don't have an account yet?</Text>
        <Text style={formLogin.hyperlink}>Register</Text>
      </View>
    );
  }
}
