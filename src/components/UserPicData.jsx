import { Text, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '../styles/colors';
import { containers } from '../styles/UserProfileScreen/Components_UserPicData';
import { elements } from '../styles/UserProfileScreen/Components_UserPicData';

export default class UserPicData extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={containers.mainContainer}>
        <Text style={elements.textTitle}>User Profile</Text>
        <TouchableOpacity>
          <FontAwesome5
            name='user-circle'
            size={80}
            color={COLORS.WHITE}
            style={elements.userIcon}
          />
        </TouchableOpacity>
        <Text style={elements.userNameText}>{this.props.user.username}</Text>
        <Text style={elements.userEmailText}>{this.props.user.email}</Text>
      </View>
    );
  }
}
