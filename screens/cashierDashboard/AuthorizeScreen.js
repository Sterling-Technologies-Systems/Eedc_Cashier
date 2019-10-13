
import React, { Component } from 'react'
import { Container, Header, Item, Input, Icon, Button,  Badge, Text, Card, CardItem, Body, Right , Left, View, 
    Content, List, ListItem } from "native-base";
    import { Col, Row, Grid} from 'react-native-easy-grid';
import  {StyleSheet, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from 'react-native-ui-kitten';

import { Font, AppLoading } from "expo";


export default class AuthorizeScreen extends Component {
  state = {
      fontLoaded: false,
  }

  async componentWillMount() {
      await Expo.Font.loadAsync({
          Roboto: require("../../assets/fonts/Roboto/Roboto-Black.ttf"),
          Roboto_medium: require("../../assets/fonts/Roboto/Roboto-Medium.ttf")
      });
      this.setState({
          fontLoaded: true
      });
  }

onItemPress = (index) => {
    console.log('you haf click')
};

  render() {
        if (!this.state.fontLoaded) {
            return <AppLoading / > ;
        }
    return (
      <>
           <Container>
          

             <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.linearTop}>

            <Row  style={{paddingTop: 25}}>
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
                            <Col>
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

            <Row  style={{marginTop: 80}}>
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

      <Card>
            
             
        <List>
            <ListItem itemDivider>
              <Text>Analysis By Customer Type</Text>
            </ListItem>                    
            <ListItem>
              <Text>Aaron Bennet</Text>
            </ListItem>
            <ListItem>
              <Text>Ali Connors</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Analysis by Payment Type</Text>
            </ListItem>  
            <ListItem>
              <Text>Bradley Horowitz</Text>
            </ListItem>
          </List>

        
          </Card>


      </Container>
   
      </>
    )
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
    date: {
        fontSize: 7
    },
    listItem: {
        borderRadius: 8
    },
    listItemTitle: {
        color: 'black'
    },
    listItemDescription: {
        color: 'gray'
    },
})


