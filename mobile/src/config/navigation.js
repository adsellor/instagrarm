import React from 'react'

import {StackNavigator, TabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationComponent } from 'react-native-material-bottom-navigation'



import Main from '../screens/main';
import Account from '../screens/account'
import Explore from '../screens/explore'
import Signup from '../screens/signup';
import Login from '../screens/login'


const Tabs = new TabNavigator({
  Home: {
    screen: Main,
    navigationOptions:  {
      tabBarLable:  'Home',
      tabBarIcon: ()  => (<Icon size={24} color='white' name='home'/>),
  },
},
  Account: {
    screen: Account,
    navigationOptions:  {
      tabBarLable:  'Explore',
      tabBarIcon: ()  => (<Icon size={24} color='white' name='user'/>)

  },
  },
  Explore: {
    screen: Explore,
    navigationOptions:  {
      tabBarLable:  'Explore',
      tabBarIcon: ()  => (<Icon size={24} color='white' name='search'/>)

  },
  }
},
{
  swipeEnabled: true,
  animationEnabled: true,
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: '#FFF',
      rippleColor: '#FFF',
      tabs: {
        Home: {
          barBackgroundColor: '#59ABE3',
          inactiveLAbleColor: '#ff',
          activeLabelColor: '#FFF',
        },
        Explore: {
          barBackgroundColor: '#36D7B7',
          activeLabelColor: '#FFF',
          lableColor: '#BDC3C7'

        },
        Account: {
          barBackgroundColor: '#DCC6E0',
          activeLabelColor: '#FFF',
          lableColor: '#BDC3C7'
        }
      }
    }
  }
})

export default ScreenStack = new StackNavigator({
  Signup: {
    screen: Signup,
    navigationOptions:  {
      headerVisible: false
    }
  },

  Login:  {
    screen: Login,
    navigationOptions:  {
      headerVisible: false
    }
  },

  TabScreen: {
    screen: Tabs,
    title: 'instagrarm',
    navigationOptions:  {
      titleStyle:{
        fontWeight: '200'
      },
        headerStyle:  {
        elevation: 0,
        shadowOpacity: 0,
        height: 50,
        backgroundColor: '#59ABE3',
      },
      headerLeft: null,
      footerOptions: {
        visible: true
      }
    },
  }
})
