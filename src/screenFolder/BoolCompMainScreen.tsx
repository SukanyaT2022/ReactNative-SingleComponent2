import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BoolSmallComp from './componentFolder/BoolSmallComp'
import {data} from './constantData/data'

const BoolCompMainScreen = () => {
const [selected, setSelected] = useState<boolean>(false);

const handleFunc = () => {
  setSelected(!selected);
};

  return (
    <View>
      <Text>BoolCompMainScreen</Text>
      {
data && data.map((item, index)=>{
  return <BoolSmallComp
  key = {index}
  text = {item.title}
  buttonTextProp = "click me"
  // disable = {false}
  selectdProp = {selected}
handleFuncProp = {handleFunc}
  />
})

      }
     
    </View>

  )
}

export default BoolCompMainScreen

const styles = StyleSheet.create({})