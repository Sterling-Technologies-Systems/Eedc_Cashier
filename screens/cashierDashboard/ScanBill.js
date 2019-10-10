

import React, { Component } from 'react';

import  {StyleSheet, TouchableOpacity} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Container, Header, Content, Form, Item, View, Left, Right, Title, Icon, Body } from 'native-base';
import {Input,Layout, Text, Button} from  'react-native-ui-kitten'
import { Font, AppLoading } from "expo";

import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

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
        const {
            hasCameraPermission
        } = this.state;
        if (hasCameraPermission === null) {
            return <View / > ;
        } else if (hasCameraPermission === false) {
            return <Text > No access to camera </Text>;
        } else {
        return (

             <KeyboardAwareScrollView
       style={{ backgroundColor: '#4c69a5' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.keyboard}
      scrollEnabled={false}
    >
             <Container>

              <Header>
          <Left>
            <Button hasText transparent>
              <Text>Back</Text>
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

        

            <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
              </TouchableOpacity>
            </View>
          </Camera>
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
}
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