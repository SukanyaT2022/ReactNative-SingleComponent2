import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmallBoxComp4 from './componentFolder/SmallBoxComp4'

interface MainBox4Prop{

}

const MainBox4 = () => {

  const [selected, setSelected] = React.useState(false)
  return (
    <View>
      <Text>MainBox4</Text>
      <SmallBoxComp4 
      title = 'title 1'
      subtitle='subtitle 1'
      imageProp={require('../screenFolder/assets/images/imgDog1.jpg')}
      textBtnProp='click me 1'
      handleFuncProp={() => setSelected(!selected)}
      selectedProp={selected}
      
      />

    </View>
  )
}

export default MainBox4

const styles = StyleSheet.create({})