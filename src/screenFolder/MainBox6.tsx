import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SmallBox6 from './componentFolder/SmallBox6'
const dogone = require('./assets/images/imgDog1.jpg')
const MainBox6 = () => {
  const [selected, setSelected] = useState(false)

  const handleSelectionFunc = () => {
    setSelected(!selected)
  }

  return (
    <View>
      <SmallBox6
        titleProp="title"
        subtitleProp="subtitle"
        imageProp={dogone}
        handleFuncProp={handleSelectionFunc}
        btnTextProp="click me"
        selectProp={selected}
      />
    </View>
  )
}

export default MainBox6

const styles = StyleSheet.create({})