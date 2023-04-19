import { Text, View, Dimensions, TouchableOpacity, TextInput, Pressable } from 'react-native';
import React, { Component } from 'react';
import { Ionicons, Octicons, Feather } from '@expo/vector-icons';
import { COLORS } from '../styles/colors';
import { Divider, List } from 'react-native-paper';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { containers } from '../styles/UserProfileScreen/Components_UserInfo';
import { elements } from '../styles/UserProfileScreen/Components_UserInfo';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalIsActive: false,
      domicileIsActive: false,
      text: '',
      textUsername: "",
      textEmail: "",
      textStreet: "",
      textCity: "",
      textCountry: "",
      textZipCode: "",
    };
  }

  handleChangeText = (inputName, newText) => {
    this.setState({ [inputName]: newText });
  };

async callAPI(){
  /* const config = {
    method: "PUT",
    headers: {
      "Content-type": 'application/json',
      Authorization: "Token " + await AsyncStorage.getItem("token"),
    },
    body: JSON.stringify(
        {
          username: "",
          email: "henrikhwolf@gmail.com",
          city: "Guatemala, city",
          address: "direccion",
          postal_code: 547,
          country: ""
        }
    )
  };
  try {
    await fetch(
      `https://findgure.up.railway.app/api/users/data/`,
      config
    );
      } catch (e) {
    ToastAndroid.show(e.toString(), ToastAndroid.LONG);
  } */
  console.log("Test callAPI")
}

  async saveProfile() {
    console.log("push")
    this.callAPI()
    console.log("sent")
  }

  componentDidMount(){
    this.state.textUsername = this.props.user.username;
    this.state.textEmail = this.props.user.email;
    this.state.textStreet = this.props.user.address;
    this.state.textCity = this.props.user.city;
    this.state.textCountry = this.props.user.country;
    this.state.textZipCode = String(this.props.user.postal_code);
  }

  render() {
    
    return (
      <View style={containers.mainContainer}>
        <Collapse
          isExpanded={this.state.generalIsActive}
          onToggle={() => {
            if (this.state.domicileIsActive === true && this.state.generalIsActive === false) {
              this.setState({ domicileIsActive: false, generalIsActive: true });
            } else if (
              this.state.domicileIsActive === false &&
              this.state.generalIsActive === false
            ) {
              this.setState({ generalIsActive: !this.state.generalIsActive });
            }
          }}
        >
          <CollapseHeader>
            <View
              // Container for the first row
              style={containers.rowContainerDefault}
            >
              <View style={containers.iconContainer}>
                <Ionicons name='settings-outline' size={24} color={COLORS.DARK_PURPLE} />
              </View>
              <Text style={elements.textSectionTitle}>General</Text>
              <Feather
                name='chevron-down'
                size={24}
                color={COLORS.DARK_PURPLE}
                style={elements.iconSection}
              />
            </View>
            <Divider style={elements.dividerSection} />
          </CollapseHeader>
          <CollapseBody>
            <View>
              <List.Section>
                <List.Item
                  title='Username'
                  right={() =>
                    <TextInput
                      placeholder={'Username'}
                      value={this.state.textUsername}
                      onChangeText={(newText) => this.handleChangeText('textUsername', newText)}
                      style={elements.inputDefault}
                    />
                  }
                />

                <List.Item
                  title='Email'
                  right={() => 
                    <TextInput
                      placeholder={'Email'}
                      value={this.state.textEmail}
                      onChangeText={(newText) => this.handleChangeText('textEmail', newText)}
                      style={elements.inputDefault}
                    />
                  }
                />
              </List.Section>
            </View>
            <Divider style={elements.dividerSection} />
          </CollapseBody>
        </Collapse>
        <Collapse
          isExpanded={this.state.domicileIsActive}
          onToggle={() => {
            if (this.state.generalIsActive === true && this.state.domicileIsActive === false) {
              this.setState({ generalIsActive: false, domicileIsActive: true });
            } else if (
              this.state.domicileIsActive === false &&
              this.state.generalIsActive === false
            ) {
              this.setState({ domicileIsActive: !this.state.domicileIsActive });
            }
          }}
        >
          <CollapseHeader>
            <View
              // Container for the second row
              style={containers.rowContainerDefault}
            >
              <View style={containers.iconContainer}>
                <Ionicons name='home-outline' size={24} color={COLORS.DARK_PURPLE} />
              </View>
              <Text style={elements.textSectionTitle}>Domicile</Text>
              <Octicons
                name='chevron-down'
                size={24}
                color={COLORS.DARK_PURPLE}
                style={elements.iconSection}
              />
            </View>
            <Divider style={elements.dividerSection} />
          </CollapseHeader>
          <CollapseBody>
            <View>
              <List.Section>
                <List.Item
                  title='Street'
                  right={() => 
                    <TextInput
                      placeholder={'Street'}
                      value={this.state.textStreet}
                      onChangeText={(newText) => this.handleChangeText('textStreet', newText)}
                      style={elements.inputDefault}
                    />
                  }
                />
                
                <List.Item
                  title='City'
                  right={() =>
                    <TextInput
                      placeholder={'City'}
                      value={this.state.textCity}
                      onChangeText={(newText) => this.handleChangeText('textCity', newText)}
                      style={elements.inputDefault}
                    />
                  }
                />

                <List.Item
                  title='Country'
                  right={() =>
                    <TextInput
                      placeholder={'Country'}
                      value={this.state.textCountry}
                      onChangeText={(newText) => this.handleChangeText('textCountry', newText)}
                      style={elements.inputDefault}
                    />
                  }
                />
                <List.Item
                  title='Zip Code'
                  right={() =>
                    <TextInput
                      placeholder={'Zip Code'}
                      value={this.state.textZipCode}
                      onChangeText={(newText) => this.handleChangeText('textZipCode', newText)}
                      style={elements.inputDefault}
                    />
                  }
                />
              </List.Section>
            </View>
            
          </CollapseBody>
        </Collapse>

        <View
          // Container for the third row
          style={containers.rowContainerOrders}
        >
          <TouchableOpacity style={containers.buttonContainer} onPress={() => this.saveProfile()}>
            
              <Ionicons name='receipt-outline' size={24} color={COLORS.DARK_PURPLE} />
              <Text style={elements.textSectionTitle}>Save profile</Text>
            
          </TouchableOpacity>
        </View>
        <Divider style={elements.dividerSection} />
        
        <View
          // Container for the third row
          style={containers.rowContainerOrders}
        >
          <TouchableOpacity style={containers.buttonContainer}>
            <Ionicons name='receipt-outline' size={24} color={COLORS.DARK_PURPLE} />
            <Text style={elements.textSectionTitle}>My Orders</Text>
          </TouchableOpacity>
        </View>
        <Divider style={elements.dividerSection} />
      </View>
    );
  }
}
