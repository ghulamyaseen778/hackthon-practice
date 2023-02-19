import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../src/Modules/profile';
import Icon from 'react-native-vector-icons/Ionicons'
import Service from '../src/Modules/services';
import Admin from '../src/Modules/admin';
import DyncmicPage from '../src/Modules/admin/DyncmicPage';
import axios from 'axios';
import {API_URL} from "@env"
import AsyncStorage from '@react-native-async-storage/async-storage';
const Tabs = createBottomTabNavigator();

const LayOut = () => {
  const [is,setIs] = useState(false)
  const [data,setData] = useState("")
     useEffect(()=>{
      const getData = async () => {
        await axios.get(`${API_URL}/token/${await AsyncStorage.getItem("user_hackthon")}`)
        .then(res=>{
         setData(res.data)
         console.log(res.data)
        })
        .catch(err =>{
        })
         }
      getData()
     },[])
    useEffect(()=>{
      if(data?.role=="admin"){
        setIs(true)
       }
    },[data])
  return (
        <Tabs.Navigator 
        initialRouteName={is?"Admin":'User-Profile'}
        >
          <Tabs.Screen name="User-Profile" component={Profile} 
        options={{
          headerShown:false,
          title:"profile",
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
        {
          is?
          <>
          <Tabs.Screen name="Admin" component={Admin} 
        options={{
          headerShown:false,
          title:"Admin",
          tabBarIcon:(tabInfo)=>{
            return(
              <Icon
              name="person-circle"
              size={24}
              style={tabInfo.focused?{color:"#4FA4F4"}:{}}
              />
            )
          },
        }}
        />
        
          </>:
        <>
          
        <Tabs.Screen name="Service" component={Service} 
      options={{
        headerShown:false,
        title:"Service",
        tabBarIcon:(tabInfo)=>{
          return(
            <Icon
            name="people-circle"
            size={24}
            style={tabInfo.focused?{color:"#4FA4F4"}:{}}
            />
          )
        },
      }}
      />
        </>
        
      }
        </Tabs.Navigator>
  )
}

export default LayOut