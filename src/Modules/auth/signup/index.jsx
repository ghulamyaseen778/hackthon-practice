import { View, Text, TextInput, Pressable,SafeAreaView,ScrollView,Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import InputText from '../../../Components/Global/Input'
import Button from '../../../Components/Global/Button'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {API_URL} from "@env"

const SignUp = ({navigation}) => {
  const [Email,setEmail] = useState("")
  const [Password,setPassword] = useState("")
  const [MobileNo,setMobileNo] = useState("")
  const [UserName,setUserName] = useState("")

  const SignUpHandler = async () => {
    await axios.post(`${API_URL}/signup`,{
      email:Email,
      password:Password,
      user_name:UserName,
      mobile_no:MobileNo,
    })
    .then(async(res) =>{
      console.log(res.data.data)
    await AsyncStorage.setItem("user_hackthon",res.data.data.token)
      setEmail('')
      setPassword('')
      setMobileNo('')
      setUserName('')
      await navigation.navigate("LayOut")
    })
    .catch(err => {
      Alert.alert("Something went wrong please try again")
    })
  }
  return (
    <ScrollView
    style={{
      height:"100%",
      backgroundColor:"#F0F5FB"
    }}
    >
      <View
        style={{
          backgroundColor:"#4FA4F4",
          height:100,
          width:"100%",
          borderBottomLeftRadius:30,
          borderBottomRightRadius:30,
        }}
      >
        <Text
        style={{
          color:"white",
          fontSize:60,
          fontWeight:800,
          marginTop:2,
          textAlign:"center",
        }}
        >
          Taxi App
        </Text>
      </View>
      <View>
       <Text
       style={{
        fontSize:40,
        fontWeight:700,
        paddingHorizontal:20,
        marginTop:20,
        fontFamily:"Verdana",
        color:"#4FA4F4"
      }}
       >
       SignUp
       </Text>
      </View>
      
      <SafeAreaView
      style={{
        marginTop:20,
      }}
      >
        <InputText
        placeholder="Enter Username"
        dataChangeFunc={(e)=>setUserName(e)}
        value={UserName}
        />
        <InputText
        placeholder="Enter Phone Number"
        type="number-pad"
        dataChangeFunc={(e)=>setMobileNo(e)}
        value={MobileNo}
        />
        <InputText
        placeholder="Enter Email Address"
        type="email-address"
        dataChangeFunc={(e)=>setEmail(e)}
        value={Email}
        />
        <InputText
        placeholder="Enter Password"
        entry={true}
        dataChangeFunc={(e)=>setPassword(e)}
        value={Password}
        />
      </SafeAreaView>
      <View
      style={{
        marginTop:20
      }}
      >
        <Button
        text="SignUp"
        func={SignUpHandler}
        />
      </View>
      <View
      style={{
        marginTop:5
      }}
      >
        <Pressable>
        <Text
        style={{
          fontSize:16,
          textAlign:"center",
        }}
        >
        You have a account
        <Pressable
        onPress={()=>navigation.navigate("Login")}
        >
        <Text
        style={{
          color:"blue",
          textDecorationLine:"underline",
          fontWeight:600,
          marginLeft:10,
        }}
        >
          Login
        </Text>
        </Pressable>
          </Text> 
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default SignUp