
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

class NotificationScreen extends Component {
  render() {
    return (

          <Container>
            <Header />
            <Content>
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

    );
  }
}

export default NotificationScreen;