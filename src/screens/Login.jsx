import { Text, View } from 'react-native';
import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import LoginTabSelector from '../components/LoginTabSelector';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../styles/colors';
import { containers } from '../styles/LoginScreen/Screen_Login';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 'login',
      email: '',
      password: '',
      username: '',
    };
  }
  handler = () => {
    this.setState({
      ...this.state,
      form: this.state.form === 'login' ? 'register' : 'login',
    });
  };

  changeUserName(text) {
    this.setState({ ...this.props.state, username: text });
  }
  changeEmail(text) {
    this.setState({ ...this.props.state, email: text });
  }
  changePassword(text) {
    this.setState({ ...this.props.state, password: text });
  }

  render() {
    return (
      <View style={containers.container}>
        <LinearGradient
          colors={[COLORS.DARK_PURPLE, COLORS.PURPLE]}
          style={containers.containerColor}
        >
          <View>
            <LoginTabSelector screen={{ handler: this.handler, state: this.state }} />
            <View style={containers.containerForms}>
              {this.state.form === 'login' ? (
                <LoginForm
                  text='Log In'
                  onEmailChange={(text) => this.changeEmail(text)}
                  onPasswordChange={(text) => this.changePassword(text)}
                />
              ) : (
                <SignUpForm
                  text='Sign Up'
                  onUserNameChange={(text) => this.changeUserName(text)}
                  onEmailChange={(text) => this.changeEmail(text)}
                  onPasswordChange={(text) => this.changePassword(text)}
                />
              )}
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
