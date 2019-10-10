
import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body, Title, Icon, Right , Left, View  } from "native-base";
import { Font, AppLoading } from "expo";
import { List, ListItem } from 'react-native-ui-kitten';

import  {StyleSheet, TouchableOpacity} from 'react-native'

import {Input,Layout, Button} from  'react-native-ui-kitten'
export default class ViewPayment extends Component {
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

   onItemPress = (index) => {
       // Handle item press
   };

  
  render() {
       if (!this.state.fontLoaded) {
           return <AppLoading / > ;
       }
  const data = ['Item 1', 'Item 2', 'Item 3'];
       const renderItem = ({ item, index }) => (
                <ListItem
                title={item}
                description='Description'
                onPress={this.onItemPress}
                />
            );

             const Accessory = (style) => (
    <Button style={style}>BUTTON</Button>
  );

    return (
      <Container>
           <Header>
          <Left>
            <Button hasText transparent>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>View Payments</Title>
          </Body>
          <Right>
            <Button hasText transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
        <Content padder>

          <Card>
            <CardItem header bordered>
              <Text>View Payments</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
             

                <ListItem
    style={styles.listItem}
    titleStyle={styles.listItemTitle}
    descriptionStyle={styles.listItemDescription}
    accessory={Accessory}
    title='5000'
    description='Description of payment'
  />
                
              </Body>
            </CardItem>
         
          </Card>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({ 
    date: {fontSize: 7},
     listItem: { borderRadius: 8 },
  listItemTitle: { color: 'black' },
  listItemDescription: { color: 'gray' },
})