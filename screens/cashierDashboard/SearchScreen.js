import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import * as Font from 'expo-font';

export default class SearchScreen extends Component {
     componentDidMount() {
         Font.loadAsync({
             'Roboto_medium': require('../../assets/fonts/Roboto/Roboto-Medium.ttf'),
         });
     }
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}