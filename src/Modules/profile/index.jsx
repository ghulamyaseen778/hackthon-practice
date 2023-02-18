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
    setIsLoad(false)
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
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LottieView source={require("../../assets/Loader.json")} autoPlay loop/>
      {/* <View
      style={{
        width: "90%",
        backgroundColor:"#803AEE",
        height:150,
        borderRadius:20,
        flexDirection: "row",
      }}
      >
      <TouchableOpacity
        onPress={picker}
      >
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
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
      <View>
        <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize:20
        }}
        >
          Ghulam Yaseen
        </Text>
      </View>
      </View> */}

    </View>
  )
}


export default Profile