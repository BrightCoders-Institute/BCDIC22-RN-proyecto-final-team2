import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import UserProfile from '../screens/UserProfile';
import SearchInput from '../components/SearchInput';
import onCart from './onCart';

const Stack = createNativeStackNavigator();
const dataSource = ['apple', 'banana', 'cow', 'dex', 'zee', 'orange', 'air', 'bottle'];
export default class OnHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searching: false,
      filtered: dataSource, // filtered data
      onSearch: (text) => {
        if (text) {
          this.setState({ searching: true });
          const temp = text.toLowerCase();
          const tempList = dataSource.filter((item) => {
            if (item.match(temp)) return item;
          });
          this.setState({ filtered: tempList });
        } else {
          this.setState({ searching: false });
          this.setState({ filtered: dataSource });
        }
      },
    };
    this.changeText = this.changeText.bind(this);
  }

  changeText(text) {
    this.setState({ ...this.props.state, search: text });
  }

  render() {
    console.log(this.state.searching, 'onHome!');
    return (
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: true,
          headerTitle: () => <SearchInput onSearch={this.state.onSearch} />,
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
            <AntDesign
              onPress={() => this.props.navigation.navigate('onCart')}
              name='shoppingcart'
              size={30}
              color={props.tintColor}
            />
          ),
        }}
      >
        <Stack.Screen
          name='Home'
          component={() => <Home searching={this.state.searching} filtered={this.state.filtered} />}
        />

        <Stack.Screen name='ProductDetail' component={Home} />

        <Stack.Screen name='PurchaseProcess' component={Home} />

        <Stack.Screen name='UserProfile' component={UserProfile} />

        <Stack.Screen name='onCart' component={onCart} />
      </Stack.Navigator>
    );
  }
}
