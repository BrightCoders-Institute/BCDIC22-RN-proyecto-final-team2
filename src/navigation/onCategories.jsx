import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../screens/Categories/Categories';
import Franchises from '../screens/Categories/Franchises';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import SearchInput from '../components/SearchInput';

const Stack = createNativeStackNavigator();

export default class OnCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.changeText = this.changeText.bind(this);
  }

  changeText(text) {
    this.setState({ ...this.props.state, search: text });
  }

  render() {
    console.log(this.state.search);
    return (
      <Stack.Navigator
        initialRouteName='Categories'
        screenOptions={{
          headerShown: true,
          headerBackVisible: false,
          headerLeft: (props) => (
            <FontAwesome5
              name='user-circle'
              onPress={() => this.props.navigation.navigate('UserProfile')}
              size={30}
              color={props.tintColor}
            />
          ),
          headerRight: (props) => (
            <AntDesign name='shoppingcart' size={30} color={props.tintColor} />
          ),
          headerTitle: () => (
            <SearchInput onSearch={(text) => this.changeText(text)} value={this.state.search} />
          ),
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name='Categories' component={Categories} />

        <Stack.Screen name='Franchises' component={Franchises} />
      </Stack.Navigator>
    );
  }
}
