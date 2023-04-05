import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WishList from '../screens/Categories/WishList';
import Franchises from '../screens/Categories/Franchises';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
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

export default class OnWishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searching: false,
      filtered: dataSource,
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
        initialRouteName='Wishlist'
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
            <AntDesign
              name='shoppingcart'
              onPress={() => this.props.navigation.navigate('onCart')}
              size={30}
              color={props.tintColor}
            />
          ),
          headerTitle: () => <SearchInput onSearch={this.state.onSearch} />,
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name='Wishlist' component={WishList} />

      </Stack.Navigator>
    );
  }
}
