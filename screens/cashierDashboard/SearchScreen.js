import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, Left } from 'native-base';
import { Font, AppLoading } from "expo";


export default class SearchScreen extends Component {
    state = {
        fontLoaded: false,
    }

  async componentWillMount() {
    await Expo.Font.loadAsync({
       Roboto: require("../../assets/fonts/Roboto/Roboto-Black.ttf"),
           Roboto_medium: require("../../assets/fonts/Roboto/Roboto-Medium.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
       if (!this.state.fontLoaded) {
           return <AppLoading / > ;
       }

    return (
      <Container>
            <Header searchBar rounded>
            <Item>
                <Icon name="ios-search"/>
                <Input placeholder="Search"/>
                <Icon name="ios-paper"/>
            </Item>
            <Button transparent>
                <Text>Search</Text>
            </Button>
            </Header>
      </Container>
    );
  }
}