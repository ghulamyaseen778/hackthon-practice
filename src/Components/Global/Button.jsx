import { View, Text,Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({text,func}) => {
  return (
    <View
    style={{
      marginHorizontal:15
    }}
    >
      <Pressable
      >
     <TouchableOpacity
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
     </TouchableOpacity>
      </Pressable>
    </View>
  )
}

export default Button