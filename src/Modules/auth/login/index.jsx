import { View, Text, TextInput, Pressable,SafeAreaView,ScrollView, Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import InputText from '../../../Components/Global/Input'
import Button from '../../../Components/Global/Button'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {API_URL} from "@env"

const Login = ({navigation}) => {
  const [Email,setEmail] = useState("")
  const [Password,setPassword] = useState("")

  useEffect(()=>{
    const getData = async () => {
      await axios.get(`${API_URL}/token/${await AsyncStorage.getItem("user_hackthon")}`)
      .then(res=>{
        navigation.navigate("LayOut")
      })
      .catch(err =>{
      })
       }
       getData()
  },[])

  const LogInHandler = async () => {
    await axios.post(`${API_URL}/login`,{
      email:Email,
      password:Password
    })
    .then(async(res) =>{
      console.log(res.data.data)
      AsyncStorage.setItem("user_hackthon",res.data.data.token)
      setEmail('')
      setPassword('')
      navigation.navigate("LayOut")
    })
    .catch(err => {
      Alert.alert("Something went wrong please try again")
    })
    // console.log(Email,Password)
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
        fontSize:30,
        fontWeight:700,
        paddingHorizontal:20,
        marginTop:20,
        fontFamily:"Verdana"
      }}
       >
       Welcome Back To 
       </Text>
       <Text
       style={{
        fontSize:40,
        color:"#4FA4F4",
        fontWeight:700,
        paddingHorizontal:20,
        fontFamily:"Verdana"
       }}
       >
       Taxi App
       </Text>
      </View>
      <View>
        <Text
        style={{
          paddingLeft:20,
          color:"black",
          marginTop:10,
          marginRight:20
        }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est molestiae, voluptates aspernatur dolor tenetur illo repudiandae in delectus magnam nobis?
        </Text>
      </View>
      <SafeAreaView
      style={{
        marginTop:20,
      }}
      >
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
        <Text 
        style={{
          color:"blue",
          textDecorationLine:"underline",
        marginLeft:20,
        marginTop:2
        }}
        >
          Forgot Password
        </Text>
      </SafeAreaView>
      <View
      style={{
        marginTop:20
      }}
      >
        <Button
        text="Login"
        func={LogInHandler}
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
        You have't any account
        <Pressable
        onPress={()=>navigation.navigate("Signup")}
        >
        <Text
        style={{
          color:"blue",
          textDecorationLine:"underline",
          fontWeight:600,
          marginLeft:10
        }}
        >
          SignUp
        </Text>
        </Pressable>
          </Text> 
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default Login