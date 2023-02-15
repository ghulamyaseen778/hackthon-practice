import { View, Text,TextInput } from 'react-native'
import React from 'react'

const InputText = ({type,placeholder,entry,dataChangeFunc,value}) => {
  return (
    <View>
        <TextInput
        style={{
          backgroundColor:"white",
          paddingHorizontal:10,
          marginHorizontal:15,
          marginTop:10,
          borderRadius:7,
          borderStyle: "solid",
          borderColor:"gray",
          borderWidth:1,
          fontSize:18,
          marginTop:20,
          position:"relative"
        }}
        keyboardType={type}
        secureTextEntry={entry}
        placeholder={`${placeholder}...`}
        onChangeText={dataChangeFunc}
        value={value}
        />
    </View>
  )
}

export default InputText