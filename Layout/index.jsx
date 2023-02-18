import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../src/Modules/profile';
import Icon from 'react-native-vector-icons/Ionicons'
const Tabs = createBottomTabNavigator();

const LayOut = () => {
  return (
        <Tabs.Navigator 
        initialRouteName='User-Profile'
        >
        <Tabs.Screen name="User-Profile" component={Profile} 
        options={{
          headerShown:false,
          tabBarIcon:(tabInfo)=>{
            return(
              <Icon
              name="home"
              size={24}
              style={tabInfo.focused?{color:"#4FA4F4"}:{}}
              />
            )
          },
        }}
        />
        </Tabs.Navigator>
  )
}

export default LayOut