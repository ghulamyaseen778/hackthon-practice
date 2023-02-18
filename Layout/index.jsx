import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../src/Modules/profile';
const Stack = createNativeStackNavigator();

const LayOut = () => {
  return (
        <Stack.Navigator initialRouteName='User-Profile'>
        <Stack.Screen name="User-Profile" component={Profile} 
        options={{
          headerShown:false
        }}
        />
        </Stack.Navigator>
  )
}

export default LayOut