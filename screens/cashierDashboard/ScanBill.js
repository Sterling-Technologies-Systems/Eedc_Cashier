

import React, { Component } from 'react';

import  {StyleSheet, TouchableOpacity} from 'react-native'
import { Container, Header, Content, Form, Item, View, Left, Right, Title, Icon, Body } from 'native-base';
import {Input,Layout, Text, Button} from  'react-native-ui-kitten'

class ScanBill extends Component {

  state = {
    inputValue: '',
    shown: true,
  };


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
        
        return (
             <Container>
               <Header/>


            <View style={styles.p_3}>
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
        );
    }
}

const styles = StyleSheet.create({
   p_3: {padding: 20, marginTop: 40},
  forgotPassword: {alignItems: 'flex-end', alignSelf: 'flex-end', color: 'dodgerblue'},
  button: {width: 100, borderRadius: 25, marginTop: 10, marginBottom: 25},
  input: {borderRadius: 25, marginBottom: 10},
  mt_3: {marginBottom: 40},
  container: { flex: 1, padding: 16, paddingTop: 140 },
  text: {fontWeight: '100'},
  contentContainer: { justifyContent: 'center', alignItems: 'center' }
});

export default ScanBill;