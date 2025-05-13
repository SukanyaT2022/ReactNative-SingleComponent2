import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BoolSmallComp from './componentFolder/BoolSmallComp'
import {data} from './constantData/data'

const BoolCompMainScreen = () => {
const [selected, setSelected] = useState<boolean>(false);
const [selectedID, setSelectedID] = useState<string | null>(null);
const handleFunc = (id:string) => {
  setSelected(!selected);
  //check if it already click - if slresdy click go to null - if never click go to id
  setSelectedID(prev => prev === id ? null : id);
};

  return (
    <View>
      <Text>BoolCompMainScreen</Text>
      {
data && data.map((item, index)=>{
  const disableItem = selectedID && selectedID !== item.id;
  return <BoolSmallComp
  key = {index}
  text = {item.title}
  buttonTextProp = "click me"
  // disable = {false}
  selectdProp = {selected}
handleFuncProp = {()=>handleFunc(item.id)}
 //this line do disable btn
disableProp = {disableItem as any} 
  />
})

      }
     
    </View>

  )
}

export default BoolCompMainScreen

const styles = StyleSheet.create({})