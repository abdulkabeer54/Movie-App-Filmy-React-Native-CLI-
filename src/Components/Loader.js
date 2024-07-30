import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Constants } from '../Constants'

const Loader = () => {
  return (
     <View>
    <ActivityIndicator size='large' color={Constants.textColor}/>
    </View>
  )
}

export default Loader