import { View, ScrollView } from "react-native";
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

  componentDidMount() {
    fetch("https://findgure.up.railway.app/api/users/data/")
      .then((response) => response.json())
      .then((data) => this.setState({ user: data }));
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
