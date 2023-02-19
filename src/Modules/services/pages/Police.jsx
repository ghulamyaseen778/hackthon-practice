import { View, Text } from 'react-native'
import React,{useState} from 'react'
import Button from '../../../Components/Global/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import {API_URL} from "@env"

const Police = ({navigation}) => {
  const [Data,setData] =useState({})
  const callCase = async(cases) =>{
    const data = await AsyncStorage.getItem("user_hackthon")
    const obj ={
      For:"Police",
      applyId:data,
      case:cases,
      locationFor:"Husanabad"
    }
    await axios.post(`${API_URL}/case`,obj)
   .then(res=>{
    setData(res.data)
    navigation.navigate("sample-page",res.data)

   })
   .catch(err =>{
    console.log(data)
   })
  }
  return (
    <View>
      <View
            style={{
              height: '100%',
              justifyContent: 'flex-end',
              marginBottom:10
            }}
          >
            <View
              style={{
                marginVertical: 10
              }}
            >
              <Button
                text="Fight/Fire"
                func={()=>{
                  callCase("Fight/Fire")
                }}
              />
            </View>
            <View
              style={{
                marginVertical: 10
              }}
            >
              <Button
                text="Robbery"
                func={()=>{
                  callCase("Robbery")
                }}
              />
            </View>
            <View
              style={{
                marginVertical: 10
              }}
            >
              <Button
                text="Harassment"
                func={()=>{
                  callCase("Harassment")
                }}
              />
            </View>
          </View>
    </View>
  )
}

export default Police