

import React, { Component } from 'react';
import  {StyleSheet} from 'react-native'
import { Container, Content, Form, Item, View } from 'native-base';
import {Input,Layout, Text, Button} from  'react-native-ui-kitten'
export default class ForgotScreen extends Component {
    state = {
        inputValue: '',
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
                    Welcome!
                </Text>
                <Text style={styles.mt_3}
                    category='p'>
                    Please Sign-in to continue
                </Text>

                
                    <>
                        <Input style={styles.input} placeholder="Email Address"
                    size='large'
                    value={this.state.inputValue}
                    onChangeText={this.onInputValueChange}
                />


                  <Button style={styles.button} size='medium'>Send Reset link</Button>


                   <Button  onPress={() => navigate('Register')} appearance='outline'>or Create An Account</Button>
                  
                    </>
      
                </Layout>
        );

    }
}

const styles = StyleSheet.create({
  forgotPassword: {alignItems: 'flex-end', alignSelf: 'flex-end', color: 'dodgerblue'},
  button: {width: 200, borderRadius: 25, marginTop: 10, marginBottom: 20},
  input: {borderRadius: 25, marginBottom: 10},
  mt_3: {marginBottom: 40},
  container: { flex: 1, padding: 16, paddingTop: 150 },
  text: {fontWeight: '100'},
  contentContainer: { justifyContent: 'center', alignItems: 'center' }
});