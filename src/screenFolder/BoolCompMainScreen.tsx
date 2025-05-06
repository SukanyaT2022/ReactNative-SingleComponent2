import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoolSmallComp from './componentFolder/BoolSmallComp'

const BoolCompMainScreen = () => {
  return (

    <View>
      <Text>BoolCompMainScreen</Text>
      <BoolSmallComp
      text = "box 1"
      buttonTextProp = "click me"
      disable = {false}
      />
    </View>

  )
}

export default BoolCompMainScreen

const styles = StyleSheet.create({})