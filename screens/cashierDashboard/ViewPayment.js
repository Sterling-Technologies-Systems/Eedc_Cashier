
import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body,  Icon, Right ,  List, ListItem, View  } from "native-base";


import  {StyleSheet, TouchableOpacity} from 'react-native'

import {Input,Layout, Button} from  'react-native-ui-kitten'
export default class ViewPayment extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>

          <Card>
            <CardItem header bordered>
              <Text>View Payments</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                 <Card>
                    <CardItem>
                    <Icon active name="logo-googleplus" />
                    <Text>Google Plus</Text>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                    </CardItem>
                 </Card>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}