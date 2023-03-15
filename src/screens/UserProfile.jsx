import { View, ScrollView } from 'react-native';
import React, { Component } from 'react';
import UserPicData from '../components/UserPicData';
import UserInfo from '../components/UserInfo';

export default class UserProfile extends Component {
  render() {
    return (
      <View>
        <UserPicData
          user={{
            username: 'QuackDuster',
            email: 'quack@gmail.com',
          }}
        />
        <ScrollView>
          <UserInfo
            user={{
              username: 'QuackDuster',
              email: 'quack@gmail.com',
              street: 'Wallaby St 123',
              city: 'Sydney',
              country: 'Australia',
              zip: '29000',
            }}
          />
        </ScrollView>
      </View>
    );
  }
}
