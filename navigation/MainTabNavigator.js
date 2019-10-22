import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator ,createSwitchNavigator} from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ForgotScreen from '../screens/ForgotScreen'
import LinksScreen from '../screens/LinksScreen';
import NotificationScreen from '../screens/NotificationScreen';

import ViewPayment from '../screens/cashierDashboard/ViewPayment'
import ScanBill from '../screens/cashierDashboard/ScanBill'
import DashboardScreen from '../screens/cashierDashboard/dashboard'
import SearchScreen from '../screens/cashierDashboard/SearchScreen'
import AuthorizeScreen from '../screens/cashierDashboard/AuthorizeScreen'

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
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';


export const ProcessStack = createStackNavigator(
  {
     Authorize: AuthorizeScreen,
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
  tabBarLabel: 'Payments',
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon focused = {
      focused
    }
    name = {
      Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'
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




const NotificationsStack = createStackNavigator(
  {
    Notification: NotificationScreen,
  },
  {
    headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
  }
);

NotificationsStack.navigationOptions = {
  tabBarLabel: 'Notifications',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

NotificationsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  NotificationsStack,
  ProcessStack
});

tabNavigator.path = '';

export default tabNavigator;
