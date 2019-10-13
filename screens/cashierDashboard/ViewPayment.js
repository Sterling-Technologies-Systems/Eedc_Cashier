
import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body, Title, Icon,  List, ListItem, Badge, Right , Left, View, Thumbnail  } from "native-base";
import { Font, AppLoading } from "expo";
import { Col, Row, Grid} from 'react-native-easy-grid';
import { Input, Layout, Button, ButtonGroup } from 'react-native-ui-kitten';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from 'react-native-ui-kitten';

import  {StyleSheet, TouchableOpacity} from 'react-native'


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

          
    return (
      <Container>

        <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.linearTop}>

            <Row style={{paddingTop: 25}}>
                <Col>
                       <Avatar
                            source={require('../../assets/images/robot-dev.png')}
                            size='large'
                            shape='rounded'
                        /> 
                        <Text style={styles.BigText}>Name</Text>
                        <Text style={styles.SmallText}>Account Type</Text>
                </Col>

                <Col>
                        <Text style={styles.BigText01}>55 Transactions Today</Text>
                        <Row>
                            <Col style={{width: 30}}>
                                <Badge success>
                                    <Text style={styles.SmallText}>44</Text>
                                </Badge>
                            </Col>
                            <Col>
                                <Badge danger>
                                    <Text style={styles.SmallText}>44</Text>
                                </Badge>
                            </Col>
                        </Row>
                </Col>
            </Row>

            <Row style={{marginTop: 80}}>
                <Col>
                    <Text style={styles.BigText}>9,000,000</Text>
                    <Text style={styles.SmallText}>Postpaid</Text>
                </Col>

                <Col>
                    <Text style={styles.BigText}>9,000,000</Text>
                    <Text style={styles.SmallText}>Prepaid</Text>
                </Col>
            </Row>
        </LinearGradient>



        <Content padder>
          <Card>

        <List>
            <ListItem avatar>
              <Left>
                <Badge success style={{paddingTop: 5}}>
                     <Icon style={styles.BigText} type="FontAwesome" name="check" />
                </Badge>
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy .</Text>

                 <ButtonGroup>
                    <Button size='tiny' status='danger' style={styles.btnSM}>Request Reversal</Button> 
                    <Button size='tiny' status='primary' style={styles.btnSM}>Print</Button>
                </ButtonGroup>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
        </List>


         <List>
            <ListItem avatar>
              <Left>
                <Badge danger>
                     <Text style={styles.BigText}>&times;</Text>
                </Badge>
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy .</Text>

                 <ButtonGroup>
                    <Button size='tiny' status='danger' style={styles.btnSM}>Request Reversal</Button> 
                    <Button size='tiny' status='primary' style={styles.btnSM}>Print</Button>
                </ButtonGroup>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
        </List>
                
            
         
          </Card>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
            btnSM: {
                fontSize: 5,
                padding: 0
            },
            Icon: {
                color: '#fff',
                fontSize: 14,
                marginRight: 10,
                marginLeft: 10
            },
            Right: {
                alignItems: 'flex-end'
            },
            textWhite: {
                color: "#fff"
            },
            BigText: {
                color: "#fff",
                fontSize: 15
            },
             BigText01: {
                 color: "#fff",
                 fontSize: 12
             },
            SmallText: {
                color: "#fff",
                fontSize: 8
            },
            linearTop: {
   
    padding: 15,
    height: 220,
    alignItems: "flex-start",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
    
  },
  icon: {
    alignSelf: "center",
    alignContent: "center"
  },
    date: {fontSize: 7},
     listItem: { borderRadius: 8 },
  listItemTitle: { color: 'black' },
  listItemDescription: { color: 'gray' },
})