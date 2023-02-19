import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServiceMain from './pages';
import Ambulance from './pages/ambulance';
import Police from './pages/Police';
import FireBrigade from './pages/Fire-Brigade';
import SampleCom from './pages/sample';
import DyncmicPage from '../admin/DyncmicPage';

const Stack = createNativeStackNavigator();

const Service = () => {
    return (
        <Stack.Navigator initialRouteName='main'>
            <Stack.Screen name="main" component={ServiceMain} options={{
                title:"Service"
            }} />
            <Stack.Screen name="Ambulance" component={Ambulance} />
            <Stack.Screen name="Police" component={Police} />
            <Stack.Screen name="Fire-Brigade" component={FireBrigade} />
            <Stack.Screen name="sample-page" component={SampleCom} options={{
                title:"Help Line Info"
            }} />

        </Stack.Navigator>
    )
}

export default Service