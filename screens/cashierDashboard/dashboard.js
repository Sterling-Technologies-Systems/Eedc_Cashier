



import React, { Component } from 'react';
import  {StyleSheet, TouchableOpacity} from 'react-native'
import { Container, Content, Form, Item, View } from 'native-base';
import {Input,Layout, Text, Button} from  'react-native-ui-kitten'
export default class DashboardScreen extends Component {
    state = {
        username: '',
        password: ''
    };

    onInputValueChange = (inputValue) => {
        this.setState({
            inputValue
        });
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return (
   
                <Layout style={styles.container} level='4'>
               <Text style={styles.text}
                    category='h1'>
                    Dashboard
                </Text>
              
                    <>
             
                    </>
      
                </Layout>
        );

    }
}

const styles = StyleSheet.create({
  forgotPassword: {alignItems: 'flex-end', alignSelf: 'flex-end', color: 'dodgerblue'},
  button: {width: 100, borderRadius: 25, marginTop: 10, marginBottom: 25},
  input: {borderRadius: 25, marginBottom: 10},
  mt_3: {marginBottom: 40},
  container: { flex: 1, padding: 16, paddingTop: 140 },
  text: {fontWeight: '100'},
  contentContainer: { justifyContent: 'center', alignItems: 'center' }
});