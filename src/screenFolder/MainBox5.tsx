import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmallBoxComp5 from './componentFolder/SmallBoxComp5'



const MainBox5 = () => {
    const [selected, setSelected] = React.useState(false)
  return (
    <View>
      <Text>MainBox5</Text>
      <SmallBoxComp5
      titleProp = "title 1"
      subtitleProp = "subtitle 1"
      btnTextProp = "click me 1"
      handleFuncProp={() => setSelected(!selected)}
      selectedProp = {selected}
      />
    </View>
  )
}

export default MainBox5

const styles = StyleSheet.create({})