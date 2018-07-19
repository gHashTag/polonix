import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Tab1 from './tab1'
import Tab2 from './tab2'

export default createBottomTabNavigator({
  Screen: {
    screen: Tab1,
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons size={25} color={tintColor} name={focused ? 'ios-home' : 'ios-home-outline'} />
      )
    }
  },
  Screen2: {
    screen: Tab2,
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons size={32} color={tintColor} name={focused ? 'ios-list' : 'ios-list-outline'} />
      )
    }
  }
},
{
  initialRouteName: 'Screen',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontFamily: 'AppleSDGothicNeo-Light',
      fontSize: 1,
      color: 'gray'
    },
    style: {
      backgroundColor: '#fff',
      height: 50,
      paddingVertical: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      elevation: 4
    }
  },
  contentOptions: {
    activeTintColor: '#e91e63'
  }
})
