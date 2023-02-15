import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/Modules/auth/signup';
import Login from './src/Modules/auth/login';


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
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App