import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface SmallBox5Prop{
    titleProp: string;
    subtitleProp: string;
    btnTextProp: string;
    selectedProp?: boolean;
    handleFuncProp?: ()=> void;
}
const SmallBoxComp5 = ({titleProp, subtitleProp, 
    btnTextProp, selectedProp, handleFuncProp}:SmallBox5Prop) => {
  return (
    <View style={[styles.main, selectedProp && styles.changeBorderColor]}>
      <Text>SmallBoxComp5</Text>
      <Text >{titleProp}</Text>
      <Text>{subtitleProp}</Text>
      <TouchableOpacity
      style ={styles.btnstyle}
      onPress={handleFuncProp}>
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
}
})