import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Button from '../../../Components/Global/Button'

const ServiceMain = ({navigation}) => {
  const [Iskey, setIsKey] = useState(1)
  return (
    <View>
      <View
            style={{
              height: '100%',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                marginVertical: 10
              }}
            >
              <Button
                text="Police"
                func={()=>navigation.navigate("Police")}
              />
            </View>
            <View
              style={{
                marginVertical: 10
              }}
            >
              <Button
                text="Ambulance"
                func={()=>navigation.navigate("Ambulance")}
              />
            </View>
            <View
              style={{
                marginVertical: 10
              }}
            >
              <Button
                text="Fire"
                func={()=>navigation.navigate("Fire-Brigade")}
              />
            </View>
          </View>
    </View>
  )
}

export default ServiceMain