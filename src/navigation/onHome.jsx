import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import UserProfile from '../screens/UserProfile';
import SearchInput from '../components/SearchInput';

const Stack = createNativeStackNavigator();

export default class OnHome extends Component {
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
        initialRouteName='Home'
        screenOptions={{
          headerShown: true,
          headerTitle: () => (
            <SearchInput onSearch={(text) => this.changeText(text)} value={this.state.search} />
          ),
          headerTitleAlign: 'center',
          headerLeft: (props) => (
            <FontAwesome5
              onPress={() => this.props.navigation.navigate('UserProfile')}
              name='user-circle'
              size={30}
              color={props.tintColor}
            />
          ),
          headerRight: (props) => (
            <AntDesign name='shoppingcart' size={30} color={props.tintColor} />
          ),
        }}
      >
        <Stack.Screen name='Home' component={Home} />

        <Stack.Screen name='ProductDetail' component={Home} />

        <Stack.Screen name='PurchaseProcess' component={Home} />

        <Stack.Screen name='UserProfile' component={UserProfile} />

        <Stack.Screen name='MyCart' component={Home} />
      </Stack.Navigator>
    );
  }
}
