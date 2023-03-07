import { Text, View, Alert } from "react-native";
import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import LoginTabSelector from "../components/LoginTabSelector";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../styles/colors";
import { containers } from "../styles/LoginScreen/Screen_Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ErrorModal from "../components/Modals/ErrorModalLogin";
import ErrorModalSignup from "../components/Modals/ErrorModalSignup";
import SuccessSignup from "../components/Modals/SuccessSignup";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: "login",
      email: "",
      password: "",
      username: "",
      modalVisible: false,
      modalVisibleSignup: false,
      modalVisibleSuccess: false,
      errorsSignUp: {},
    };

    this.loginUser = this.loginUser.bind(this);
    this.signUpUser = this.signUpUser.bind(this);
    this.saveToken = this.saveToken.bind(this);
    this.changeModalVisible = this.changeModalVisible.bind(this);
    this.changeModalVisibleSignpup = this.changeModalVisibleSignpup.bind(this);
    this.changeModalVisibleSuccess = this.changeModalVisibleSuccess.bind(this);
  }
  handler = () => {
    this.setState({
      ...this.state,
      form: this.state.form === "login" ? "register" : "login",
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

  changeModalVisible() {
    this.setState((prevState) => ({
      modalVisible: !prevState.modalVisible,
    }));
  }
  changeModalVisibleSignpup() {
    this.setState((prevState) => ({
      modalVisibleSignup: !prevState.modalVisibleSignup,
    }));
  }

  changeModalVisibleSuccess() {
    this.setState((prevState) => ({
      modalVisibleSuccess: !prevState.modalVisibleSuccess,
    }));
  }
  async saveToken(token) {
    try {
      await AsyncStorage.setItem("token", token);
    } catch (error) {
      Alert.alert();
    }
  }

  loginUser() {
    const username = this.state.email;
    const password = this.state.password;

    fetch("https://findgure.up.railway.app/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.status === 401) {
          // display modal
          this.setState({ ...this.props.state, modalVisible: true });
          return response.json();
        } else if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        if (data.token) {
          this.saveToken(data.token);
          this.props.navigation.navigate("Home");
        }
      })

      .catch((error) => {
        console.error(error);
      });
  }

  signUpUser() {
    const username = this.state.email;
    const password = this.state.password;
    const email = this.state.email;

    fetch("https://findgure.up.railway.app/api/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
    })
      .then((response) =>
        response.json().then((data) => {
          return { status: response.status, data };
        })
      )
      .then(({ status, data }) => {
        if (status === 400) {
          this.setState({
            ...this.props.state,
            errorsSignUp: data,
            modalVisibleSignup: true,
          });
        } else if (status === 201) {
          this.setState({ ...this.props.state, modalVisibleSuccess: true });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={containers.container}>
        <ErrorModal
          modalVisible={this.state.modalVisible}
          hideModal={this.changeModalVisible}
        />
        <ErrorModalSignup
          modalVisible={this.state.modalVisibleSignup}
          hideModalSignup={this.changeModalVisibleSignpup}
          data={this.state.errorsSignUp}
        />
        <SuccessSignup
          modalVisibleSuccess={this.state.modalVisibleSuccess}
          hideModalSuccess={this.changeModalVisibleSuccess}
        />
        <LinearGradient
          colors={[COLORS.DARK_PURPLE, COLORS.PURPLE]}
          style={containers.containerColor}
        >
          <View>
            <LoginTabSelector
              screen={{ handler: this.handler, state: this.state }}
            />
            <View style={containers.containerForms}>
              {this.state.form === "login" ? (
                <LoginForm
                  text="Log In"
                  onEmailChange={(text) => this.changeEmail(text)}
                  onPasswordChange={(text) => this.changePassword(text)}
                  onLoginUser={this.loginUser}
                />
              ) : (
                <SignUpForm
                  text="Sign Up"
                  onUserNameChange={(text) => this.changeUserName(text)}
                  onEmailChange={(text) => this.changeEmail(text)}
                  onPasswordChange={(text) => this.changePassword(text)}
                  onSignUpUser={this.signUpUser}
                />
              )}
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
