import { StyleSheet, Text, View, TouchableOpacity, Button, Image, ToastAndroid, Alert, Modal, Pressable } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import React, { useState,useEffect } from 'react'
import LottieView from 'lottie-react-native';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {API_URL} from "@env"

const Profile = ({navigation}) => {
  const [imgPath, setImgPath] = useState("")
  const [Isload, setIsLoad] = useState(true)

  useEffect(()=>{
    const getData = async () => {
   await axios.get(`${API_URL}/token/${await AsyncStorage.getItem("user_hackthon")}`)
   .then(res=>{
    setInterval(()=>{
      setIsLoad(false)
    },3000)
   })
   .catch(err =>{
    navigation.navigate("Login")
   })
    }
    getData()
  },[])
  let options = {
    mediaType: "photo",
    quality: 1,
  };
  const setToastMsg = (msg) => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.BOTTOM)
  }

  const picker = () => {
    launchImageLibrary(options, (response) => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        setToastMsg("User cancelled image picker")
      }
      else if (response.error) {
        setToastMsg('ImagePicker Error: ', response.error)
      }
      else if (response.assets[0].fileSize > 2097152) {
        setToastMsg("File must be less than 2 MB")
      }
      else {
        setImgPath(response.assets[0].uri);
        console.log(response.assets[0].uri)
        setToastMsg("successFully Add")
      }
    })
  }

  return (
    <View
      style={{
        height: "100%",
        alignItems: 'center',
        backgroundColor:"#F0F5FB",
        marginTop:20
      }}
    >
      {
        Isload?
        <LottieView source={require("../../assets/Loader.json")} autoPlay loop/>
        :
       <View
      style={{
        width: "90%",
        backgroundColor:"#4FA4F4",
        height:200,
        borderRadius:20,
        alignItems: "center",
        justifyContent: "center",
      }}
      >
      <TouchableOpacity
        onPress={picker}
      >
        <Image
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            borderWidth: 2,
            borderColor: "lightgray",
          }}
          source={{
            uri: 
            imgPath
              ?
              imgPath
              :
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TgOv9CMmsUzYKCcLGWPvqcpUk6HXp2mnww&usqp=CAU"
          }}
        />
      </TouchableOpacity>
      <View
      style={{
        marginTop:10
      }}
      >
        <Text
        style={{
          color: "#F0F5FB",
          fontWeight: "bold",
          fontSize:20,
          justifyContent:"center",
          alignItems:"center",
        }}
        >
          <Text
          style={{
            color:"black",
          }}
          >
            Name:
          </Text>
          <Text>Ghulam Yaseen</Text>
        </Text>
        <Text
        style={{
          color: "#F0F5FB",
          fontWeight: "bold",
          fontSize:15
        }}
        >
          <Text
          style={{
            color:"black",
          }}
          >
            Email:
          </Text>
          <Text>muhammadyaseen3294@gmail.com</Text>          
        </Text>
        <Text
        style={{
          color: "#F0F5FB",
          fontWeight: "bold",
          fontSize:15
        }}
        >
          <Text
          style={{
            color:"black",
          }}
          >
            Mobile No:
          </Text>
          <Text>03360839778</Text>
          
        </Text>
      </View>
      </View> 
    }
    </View>
  )
}


export default Profile