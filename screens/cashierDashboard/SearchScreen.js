import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, Card, CardItem, Body, Right , Left, View  } from "native-base";

import { List, ListItem} from 'react-native-ui-kitten';


import  {StyleSheet, TouchableOpacity} from 'react-native'
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

  onPress = () => {
     console.warn('alright sending')
  };


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


              <Card>
            <CardItem header bordered>
              <Text>Customer Details</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
              <Text>Name: </Text>
              <Text>Amount:</Text>
              <Text>Vat:</Text>
              <Text>Arrears:</Text>
              <Text style={styles.BigAmount}>Total: 5,080</Text>
                
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button primary onPress={this.onPress}><Text>Pay</Text></Button>

               <Button danger onPress={this.onPress}><Text>Cancel</Text></Button>
            </CardItem>
          </Card>


      </Container>
    );
  }
}

const styles = StyleSheet.create ({
    BigAmount: {fontSize: 18,}
})