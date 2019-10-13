import * as WebBrowser from 'expo-web-browser';
import { Container, Header, Content, Card, Icon, CardItem, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from 'react-native-ui-kitten';

import React,{Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends Component {
      constructor(props) {
        super(props);
      }

_onPressButton=()=>{
    console.warn('uncle stop touching')
  }


  

render(){
    return (
       <Container style={styles.container}>
     
        
         <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearTop}>
<Row style={{paddingTop: 25}}>
<Col>
      <Text><Icon style={styles.Icon} type="FontAwesome" name="money" /></Text>
</Col>
<Col style={styles.Right}>
      <Text><Icon style={styles.Icon}  type="FontAwesome" name="user" /> 
      <Icon style={styles.Icon}  type="FontAwesome" name="power-off" /></Text>
</Col>
</Row>

               <Avatar
    source={require('../assets/images/robot-dev.png')}
    size='large'
    shape='rounded'
  /> 

    <Text style={styles.BigText}>Name</Text>
        <Text style={styles.SmallText}>Account Type</Text>


        <Row>
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


        <Content style={{paddingTop: 20}}>

          

      <Row>
          <Col style={{ }}>
           <TouchableOpacity onPress={() => this.props.navigation.navigate('Scan')}>
     
           <Card style={styles.card}>
            <CardItem style={{marginBottom: 0}}>
              <Body>
             <Image style={styles.images} source={require('../assets/images/eedcReceipt.png')} />
      
                <Text style={styles.cardText}>
                   Scan Bill
                </Text>
              </Body>
            </CardItem>
          </Card>
          </TouchableOpacity>
          </Col>

          <Col style={{  }}>
             <TouchableOpacity  onPress={() => this.props.navigation.navigate('Search')}>
           <Card style={styles.card}>
            <CardItem>
              <Body>

      <Image style={styles.images} source={require('../assets/images/eedcpay.png')} />
                
                <Text style={styles.cardText}>
                   Search
                </Text>
                
              </Body>
            </CardItem>
          </Card>
             </TouchableOpacity>
          </Col>
    </Row>

    <Row>
           <Col style={{ }}>
             <TouchableOpacity onPress={() => this.props.navigation.navigate('SeePayment')}>
             <Card style={styles.card}>
            <CardItem>
              <Body>
         <Image style={styles.images} source={require('../assets/images/eedcpay.png')} />
                
                <Text style={styles.cardText}>
                   View Payment
                </Text>
                
              </Body>
            </CardItem>
          </Card>
              </TouchableOpacity>
          </Col>

           <Col>
           <TouchableOpacity onPress={() => this.props.navigation.navigate('Authorize')}>
              <Card style={styles.card}>
            <CardItem style={{padding: 0, margin: 0}}>
              <Body style={{padding: 0, margin: 0}}>
                <Image style={styles.images} source={require('../assets/images/eedcpay.png')} />
                <Text style={styles.cardText}> 
                   Day end Payments
                </Text>
              </Body>
            </CardItem>
          </Card>
           </TouchableOpacity>
          </Col>
       </Row>
        </Content>
      </Container>

  );
}
}

HomeScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  Icon:{
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
  BigText:{
    color: "#fff",
    fontSize: 15
  },
   SmallText: {
     color: "#fff",
     fontSize:8
   },
  container: {
    backgroundColor: "#f2f2f2"
  },
  images: {
    width: 155,
    height: 100,
    marginTop: -10,
    marginLeft: -15,
    marginRight: -17,
    borderRadius: 10
  },

  imagesTop: {
    width: 175,
    height: 210,
    marginTop: -10,
    marginLeft: -15,
    marginRight: -17,
    borderRadius: 10
  },
  card: {
    width: 160,
    margin: 20,
    padding: 0,
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    height: 150
  },
  lineStyle: {
    width: 120,
    borderWidth: 0.5,
    borderColor: "#f2f2f2",
    borderRadius: 10,
    borderWidth: 1,
    margin: 10
  },
  linearTop: {
   
    padding: 15,
    height: 230,
    alignItems: "center",
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
  topCard: {
    backgroundColor: "red",
    height: 200
  },
  cardText: {
    marginTop: 15,
    textTransform: "uppercase",
    fontWeight: '500',
    color: '#555',
    fontSize: 11,
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center"
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
