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
    };
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
                  right={() => <TextInput value={this.props.user.username} style={elements.inputDefault} />}
                />

                <List.Item
                  title='Email'
                  right={() => (
                    <TextInput value={this.props.user.email} style={elements.inputDefault} />
                  )}
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
                  right={() => <TextInput value={this.props.user.address} style={elements.inputDefault} />}
                />

                <List.Item
                  title='City'
                  right={() => <TextInput value={this.props.user.city} style={elements.inputDefault} />}
                />

                <List.Item
                  title='Country'
                  right={() => <TextInput value={this.props.user.country} style={elements.inputDefault} />}
                />
                <List.Item
                  title='Zip Code'
                  right={() => <TextInput value={String(this.props.user.postal_code)} style={elements.inputDefault} />}
                />
              </List.Section>
            </View>
            
          </CollapseBody>
        </Collapse>
        
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
