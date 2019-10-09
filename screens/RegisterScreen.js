

import React, { Component } from 'react';
import  {StyleSheet} from 'react-native'
import { Container, Content, Form, Item, View } from 'native-base';
import {Input,Layout, Text, Button, Radio, RadioGroup, Select} from  'react-native-ui-kitten'
export default class RegisterScreen extends Component {
    state = {
        inputValue: '',
          selectedIndex: 0,
      };

    onInputValueChange = (inputValue) => {
        this.setState({
            inputValue
        });
    };

     onGroupSelectionChange = (selectedIndex) => {
         this.setState({
             selectedIndex
         });
     };
    
    render() {
         items = [
    { text: 'I be user' },
    { text: 'I be Vendor' },
    { text: 'I get handwork (Artisan)' },
  ];
        
        return (
   
                <Layout style={styles.container} level='4'>
               <Text style={styles.text}
                    category='h1'>
                    Hello There!
                </Text>
                <Text style={styles.mt_3}
                    category='p'>
                    Create An Account
                </Text>

                
                    <>

                 


                        <Input style={styles.input} placeholder="Full Name"
                    size='large'
                    value={this.state.inputValue}
                    onChangeText={this.onInputValueChange}
                />

                        <Input style={styles.input} placeholder="Email Address"
                    size='large'
                    value={this.state.inputValue}
                    onChangeText={this.onInputValueChange}
                />

                    <Input style={styles.input} placeholder="Password"
                    size='large'
                    value={this.state.inputValue}
                    onChangeText={this.onInputValueChange}
                />


                <Select style={styles.input}
                        data={this.items}
                        selectedOption={this.state.selectedOption}
                        onSelect={this.onSelect}
                    />

                 

                  <Button style={styles.button} size='medium'>Register</Button>
                   <Button appearance='outline' onPress={() => navigate('Login')}>Have an Account? Sign In</Button>
                  
                    </>
      
                </Layout>
        );

    }
}

const styles = StyleSheet.create({
  button: {width: 100, borderRadius: 25, marginTop: 10, marginBottom: 20},
  input: {borderRadius: 25, marginBottom: 10},
  mt_3: {marginBottom: 40},
  container: { flex: 1, padding: 16, paddingTop: 80 },
  text: {fontWeight: '100'},
  contentContainer: { justifyContent: 'center', alignItems: 'center' }
});