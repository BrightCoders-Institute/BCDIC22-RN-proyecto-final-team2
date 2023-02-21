import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { containers } from '../styles/LoginScreen/Components_Login';
import { formLogin } from '../styles/LoginScreen/Components_Login';
import { inputDefault } from '../styles/LoginScreen/Components_Login';
import { inputPassword } from '../styles/LoginScreen/Components_Login';

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
          style={inputDefault.input}
          placeholder='Email'
        />
        <TextInput
          onChangeText={(text) => {
            this.props.onPasswordChange(text);
          }}
          value={this.props.value}
          style={inputPassword.inputPass}
          secureTextEntry={true}
          placeholder='Password'
        />

        <TouchableOpacity onButtonPress style={formLogin.buttonContainer}>
          <Text style={formLogin.buttonText}>{this.props.text}</Text>
        </TouchableOpacity>

        <Text style={formLogin.askText}>Don't have an account yet?</Text>
        <Text style={formLogin.hyperlink}>Sign Up</Text>
      </View>
    );
  }
}
