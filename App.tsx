import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/Modules/auth/signup';
import Login from './src/Modules/auth/login';
import LayOut from './Layout';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} 
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen name="Signup" component={SignUp}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen name="LayOut" component={LayOut}
        options={{
          headerShown:false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App