import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const SampleCom = ({route}) => {
  const data = route.params
  console.log(data)
  return (
         <View
      style={{
        alignItems:"center",
        height: '100%',
        marginTop:20
      }}  
    >
      <TouchableOpacity
      style={{
        width: '100%',
        alignItems:"center",
        marginTop:10
      }}
      >
      <View
      style={{
        backgroundColor:"#4FA4F4",
        width:"90%",
        height:250,
        borderRadius:15,
        alignItems:"center",
      }}
      >
        <Text
        style={{
            fontSize:30,
            fontWeight:"bold",
            color:"white",
            marginTop:10
        }}
        >
      Case: {data.case}
        </Text>
        <Text
        style={{
            fontSize:25,
            fontWeight:"bold",
            color:"white",
        }}
        >
      For: {data.For}
        </Text>
        <Text
        style={{
            fontSize:15,
            fontWeight:"bold",
            color:"white",
        }}
        >
      Location: {data.locationFor}
        </Text>
        <Text
        style={{
            fontSize:15,
            fontWeight:"bold",
            color:"white",
        }}
        >
      Complain Id: {data._id}
        </Text>
        <TouchableOpacity>
        <View
        style={{
          alignItems:"center"
        }}
        >
        <Image
        style={{
          width:50,
          height:50
        }}
        source={require("../../../assets/WhatSappLogo.png")}
        />
        <Text
        style={{
          fontSize:15,
            fontWeight:"bold",
            color:"white",
        }}
        >Call On Whatsapp</Text>
        </View>
        </TouchableOpacity>
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default SampleCom