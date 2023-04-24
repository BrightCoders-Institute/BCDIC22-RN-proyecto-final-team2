import { View, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component } from "react";
import UserPicData from "../components/UserPicData";
import UserInfo from "../components/UserInfo";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

async getUser() {
  this.setState({ isLoading: true });

  await fetch("https://findgure.up.railway.app/api/users/data/", {
    method: "GET",
    headers: {
      Authorization: "Token " + (await AsyncStorage.getItem("token")),
    },
  })
  .then((response) => {return response.json()})
  .then((data) => {this.setState({ user: data })})
  
}

async componentDidMount() {
  await this.getUser();
}

  render() {
    if (!this.state.user) {
      return null;
    }

    return (
      <View>
        <UserPicData user={this.state.user} />
        <ScrollView>
          <UserInfo user={this.state.user} />
        </ScrollView>
      </View>
    );
  }
}
