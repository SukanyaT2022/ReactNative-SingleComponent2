import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface SmallBox5Prop{
    titleProp: string;
    subtitleProp: string;
    btnTextProp: string;
    selectedProp?: boolean;
    handleFuncProp?: ()=> void;
    disabledProp?: boolean;
}
const SmallBoxComp5 = ({titleProp, subtitleProp, 
    btnTextProp, selectedProp, handleFuncProp, disabledProp}:SmallBox5Prop) => {
  return (
    <View style={[styles.main, disabledProp && styles.changeBorderColor]}>
      <Text>SmallBoxComp5</Text>
      <Text >{titleProp}</Text>
      <Text>{subtitleProp}</Text>
      <TouchableOpacity
      style ={[styles.btnstyle, selectedProp && styles.changeColorSelectStyle, disabledProp && styles.btnstyle]}
      disabled={disabledProp}
      onPress={handleFuncProp}

      >

      <Text>{btnTextProp}</Text>  
      </TouchableOpacity>
    </View>
  )
}

export default SmallBoxComp5

const styles = StyleSheet.create({
main:{
    borderColor: 'green',
    borderWidth:2
},
btnstyle:{
   backgroundColor: 'green',
},
changeBorderColor:{
    borderColor: 'red',
},
changeColorSelectStyle:{
  backgroundColor: 'blue',
  
}
})