import { View, Text,Pressable } from 'react-native'
import React from 'react'

const Button = ({text,func}) => {
  return (
    <View
    style={{
      marginHorizontal:15
    }}
    >
      <Pressable
      onPress={func}
      >
      <Text
      style={{
        width:"100%",
        color:"white",
        backgroundColor:"#4FA4F4",
        fontSize:25,
        fontWeight:700,
        textAlign:"center",
        paddingVertical:10,
        borderRadius:20
      }}
      >
        {text}
        </Text>
      </Pressable>
    </View>
  )
}

export default Button