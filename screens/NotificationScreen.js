
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Button, Title, Icon, Thumbnail, Text } from 'native-base';

import { Font, AppLoading } from "expo";
class NotificationScreen extends Component {
   state = {
     fontLoaded: false,
   }

   async componentWillMount() {
     await Expo.Font.loadAsync({
       Roboto: require("../assets/fonts/Roboto/Roboto-Black.ttf"),
       Roboto_medium: require("../assets/fonts/Roboto/Roboto-Medium.ttf")
     });
     this.setState({
       fontLoaded: true
     });
   }

  
  render() {

     if (!this.state.fontLoaded) {
            return <AppLoading / > ;
        }
    return (
<>
          <Container>
            <Content>
          <Header>
              <Left>
                <Button transparent>
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body>
                <Title>Notifications</Title>
              </Body>
        </Header>


              <List>
                <ListItem avatar>
                  <Body>
                    <Text>Kumar Pratik</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                  </Body>
                  <Right>
                    <Text note>3:43 pm</Text>
                  </Right>
                </ListItem>
              </List>
            </Content>
          </Container>
</>
    );
  }
}

export default NotificationScreen;