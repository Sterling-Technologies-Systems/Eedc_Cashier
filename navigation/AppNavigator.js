import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from 'react-native-ui-kitten';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {AuthStack, ProcessStack} from './MainTabNavigator'
import MainTabNavigator from './MainTabNavigator';


const Container = createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Auth:AuthStack,
    Process: ProcessStack
  })
);

 export default () => (
   <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <Container />
  </ApplicationProvider>
)
