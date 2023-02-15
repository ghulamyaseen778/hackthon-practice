import { View, Text, TextInput, Pressable,SafeAreaView,ScrollView } from 'react-native'
import React,{useState} from 'react'
import InputText from '../../../Components/Global/Input'
import Button from '../../../Components/Global/Button'
import axios from 'axios'
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
    .then(res =>{
      console.log(res.data.data)
      setEmail('')
      setPassword('')
      setMobileNo('')
      setUserName('')
      navigation.navigate("Login")
    })
    .catch(err => {
      Alert(err.message)
    })
    // console.log(Email,Password)
  }
  return (
    <ScrollView
    style={{
      height:"100%"
    }}
    >
      <View
        style={{
          backgroundColor:"#803AEE",
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
        fontFamily:"Verdana"
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