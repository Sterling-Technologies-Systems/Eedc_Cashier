
import React, { Component } from 'react'
import { Container, Header, Item, Input, Icon, Button, Text, Card, CardItem, Body, Right , Left, View  } from "native-base";
import  {StyleSheet, TouchableOpacity} from 'react-native'
import { List, ListItem} from 'react-native-ui-kitten';

import { Font, AppLoading } from "expo";


export default class AuthorizeScreen extends Component {

onItemPress = (index) => {
    console.log('you haf click')
};

  render() {
    return (
      <div>
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
              <Button success onPress={this.onPress}><Text>Authorize Payment</Text></Button>

               <Button danger onPress={this.onPress}><Text>Cancel</Text></Button>
            </CardItem>
          </Card>


      </Container>
   
      </div>
    )
  }
}


const styles = StyleSheet.create
({
    BigAmount: {
        fontSize: 18,
    }
})