import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator ,createSwitchNavigator} from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ForgotScreen from '../screens/ForgotScreen'
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import ViewPayment from '../screens/cashierDashboard/ViewPayment'
import ScanBill from '../screens/cashierDashboard/ScanBill'
import DashboardScreen from '../screens/cashierDashboard/dashboard'
import SearchScreen from '../screens/cashierDashboard/SearchScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const Home = (props) => {
  if(true){
  return props.navigation.navigate("Dashboard")
  }
}

const HomeStack = createStackNavigator(
  {
    Home: Home,
    Dashboard:HomeScreen,
    
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';


export const ProcessStack = createStackNavigator(
  {
     Scan: ScanBill,
     SeePayment: ViewPayment,
     Search: SearchScreen
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  },
  config
);
ProcessStack.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon focused = {
      focused
    }
    name = {
      Platform.OS === 'ios' ? 'ios-link' : 'md-link'
    }
    />
  ),
};

ProcessStack.path = '';



export const AuthStack = createStackNavigator(
  {
     Login: LoginScreen,
     Register: RegisterScreen,
     ForgotPassword: ForgotScreen
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  },
  config
);

AuthStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

AuthStack.path = '';






const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SettingsStack,
  ProcessStack
});

tabNavigator.path = '';

export default tabNavigator;
