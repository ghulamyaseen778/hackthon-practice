import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {API_URL} from "@env"

const Admin = () => {
  const [data,setData] = useState([])
  const [data1,setData1] = useState({})
  useEffect(()=>{
    const getData = async () => {
   await axios.get(`${API_URL}/all-case`)
   .then((res)=>{
    console.log(res.data,"win")
    setData(res.data)
   })
   .catch(err =>{
   })
    }
    getData()
  },[])
  return (
    <ScrollView>
        <View
      style={{
        alignItems:"center",
        height: '100%',
        marginTop:20
      }}  
    >
      {data.map((e,i)=>{
        return(
          <TouchableOpacity
        key={e._id}
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
          height:150,
          borderRadius:15,
          alignItems:"center",
        }}
        >
          <Text
          style={{
              fontSize:25,
              fontWeight:"bold",
              color:"white",
              marginTop:10
          }}
          >
        Case: {e.case}
          </Text>
          <Text
          style={{
              fontSize:20,
              fontWeight:"bold",
              color:"white",
          }}
          >
        For: {e.For}
          </Text>
          <Text
          style={{
              fontSize:15,
              fontWeight:"bold",
              color:"white",
          }}
          >
        Name:Ghulam yaseen
          </Text>
          <Text
          style={{
              fontSize:15,
              fontWeight:"bold",
              color:"white",
          }}
          >
        MobileNo: 03360839778
          </Text>
          <Text
          style={{
              fontSize:15,
              fontWeight:"bold",
              color:"white",
          }}
          >
        Location: {e.locationFor}
          </Text>
        </View>
        </TouchableOpacity>
        )
      })}
    </View>
    </ScrollView>
  )
}

export default Admin