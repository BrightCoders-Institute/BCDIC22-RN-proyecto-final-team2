import React, { Component } from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import UserProfile from '../screens/UserProfile';
import SearchInput from '../components/SearchInput';
import onCart from './onCart';

const Stack = createNativeStackNavigator();
const dataSource = [
  {
    id: 1,
    name: 'Pikachu',
    price: '$ 30',
    image: 'https://www.pngkey.com/png/full/301-3018818_pokemon-pikachu-figure.png',
  },
  {
    id: 2,
    name: 'Thor',
    price: '$ 99',
    image: 'https://www.pngkey.com/png/full/301-3018818_pokemon-pikachu-figure.png',
  },
  {
    id: 3,
    name: 'Deadpool',
    price: '$ 70',
    image: 'https://www.pngkey.com/png/full/301-3018818_pokemon-pikachu-figure.png',
  },
  {
    id: 4,
    name: 'Brian May',
    price: '$ 43',
    image: 'https://www.pngkey.com/png/full/301-3018818_pokemon-pikachu-figure.png',
  },
];

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
          const tempList = dataSource.filter((item) => {
            if (item.name.match(text)) {
              return item;
            }
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
        <Stack.Screen name='Home'>
          {(props) => (
            <Home {...props} searching={this.state.searching} filtered={this.state.filtered} />
          )}
        </Stack.Screen>

        <Stack.Screen name='ProductDetail' component={Home} />

        <Stack.Screen name='PurchaseProcess' component={Home} />

        <Stack.Screen name='UserProfile' component={UserProfile} />

        <Stack.Screen name='onCart' component={onCart} />
      </Stack.Navigator>
    );
  }
}
