

import React, { Component } from 'react';

import  {StyleSheet, TouchableOpacity} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Container, Header, Content, Form, Item, View, Left, Right, Title, Icon, Body } from 'native-base';
import {Input,Layout, Text, Button} from  'react-native-ui-kitten'
import { Font, AppLoading } from "expo";
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';


import { BarCodeScanner } from 'expo-barcode-scanner';

class ScanBill extends Component {
  state = {
    inputValue: '',
    shown: true,
        fontLoaded: false,
    }

  async componentWillMount() {
    await Expo.Font.loadAsync({
       Roboto: require("../../assets/fonts/Roboto/Roboto-Black.ttf"),
           Roboto_medium: require("../../assets/fonts/Roboto/Roboto-Medium.ttf")
    });
    this.setState({ fontLoaded: true });
  }


  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }


  	toggle = () =>{
  	    this.setState({
  	        shown: !this.state.shown
  	    });
      }
      
  onPress = () => {
   console.warn('uncle im working')
  };


  onInputValueChange = (inputValue) => {
    this.setState({ inputValue });
  };



    render() {
         if (!this.state.fontLoaded) {
           return <AppLoading / > ;
       }
       const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
        return (

             <KeyboardAwareScrollView
       style={{ backgroundColor: '#f2f2f2' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.keyboard}
      scrollEnabled={false}
    >
             <Container>

              <Header>
          <Left>
            <Button hasText transparent onPress={() => this.props.navigation.push('Home')}>
                 <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Scan Bill</Title>
          </Body>
          <Right>
            <Button hasText transparent>
              <Text>Cancel</Text>
            </Button>       
          </Right>
        </Header>

        

        <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && (
          <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
        )}
      </View>


            <View style={{display: 'none'}}>
                 <Input style={styles.input}
                  label='Enter Amount'
                    value={this.state.inputValue}
                    onChangeText={this.onInputValueChange}
                />

                <Button
                    status='primary'
                    size='large'>
                    Send
                </Button>
            </View>

                </Container>
             </KeyboardAwareScrollView>
           
        );
    }


handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    alert(`${data}`);
  };

}

const styles = StyleSheet.create({
    keyboard: {fontWeight: '100'},
   p_3: {padding: 20, marginTop: 20},
  forgotPassword: {alignItems: 'flex-end', alignSelf: 'flex-end', color: 'dodgerblue'},
  button: {width: 100, borderRadius: 25, marginTop: 10, marginBottom: 25},
  input: {borderRadius: 25, marginBottom: 10},
  mt_3: {marginBottom: 40},
  container: { flex: 1, padding: 16, paddingTop: 140 },
  text: {fontWeight: '100'},
  contentContainer: { justifyContent: 'center', alignItems: 'center' }
});

export default ScanBill;