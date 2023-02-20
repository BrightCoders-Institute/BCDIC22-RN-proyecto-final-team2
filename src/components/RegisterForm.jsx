import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { containers } from '../styles/LoginScreen/Components_Register';
import { formRegister } from '../styles/LoginScreen/Components_Register';

export default class RegisterForm extends Component {
  render() {
    return (
      <View style={containers.containerRegisterForm}>
        <TextInput
          onChangeText={(text) => {
            this.props.onUserNameChange(text);
          }}
          style={formRegister.inputUserName}
          placeholder='Username'
        />
        <TextInput
          onChangeText={(text) => {
            this.props.onEmailChange(text);
          }}
          value={this.props.value}
          style={formRegister.inputEmail}
          placeholder='Email'
        />
        <TextInput
          onChangeText={(text) => {
            this.props.onPasswordChange(text);
          }}
          value={this.props.value}
          style={formRegister.inputPassword}
          secureTextEntry={true}
          placeholder='Password'
        />

        <TouchableOpacity style={formRegister.buttonContainer}>
          <Text style={formRegister.buttonText}>{this.props.text}</Text>
        </TouchableOpacity>

        <Text style={formRegister.askText}>Do you already have an account?</Text>
        <Text style={formRegister.hyperlink}>Login</Text>
      </View>
    );
  }
}
