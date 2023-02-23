import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import {
  containers,
  formSignUp,
  inputDefault,
  inputPassword,
} from '../styles/LoginScreen/Components_SignUp';

export default class SignUpForm extends Component {
  render() {
    return (
      <View style={containers.containerSignUpForm}>
        <TextInput
          onChangeText={(text) => {
            this.props.onUserNameChange(text);
          }}
          style={inputDefault.input}
          placeholder='Username'
        />
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

        <TouchableOpacity style={formSignUp.buttonContainer}>
          <Text style={formSignUp.buttonText}>{this.props.text}</Text>
        </TouchableOpacity>

        <Text style={formSignUp.askText}>Do you already have an account?</Text>
        <Text style={formSignUp.hyperlink}>Log In</Text>
      </View>
    );
  }
}
