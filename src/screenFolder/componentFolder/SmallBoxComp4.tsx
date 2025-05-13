import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import {data} from '../constantData/data.ts'

interface SmallBox4Prop{
  title: string;
  subtitle: string;
  imageProp: ImageSourcePropType;
  textBtnProp: string;
  selectedProp: boolean;
  handleFuncProp: () => void;
}

const SmallBoxComp4 = ({
  title, 
  subtitle, 
  imageProp, 
  textBtnProp, 
  selectedProp,
  handleFuncProp
}: SmallBox4Prop) => {
  const changeBordoerColorFunc = () => {

  }
  return (
    <View style={[
      styles.main, 
      selectedProp && styles.selectedBox
    ]}>
      <Text>SmallBoxComp4</Text>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
      <Image source={imageProp} style={{width:50, height:50}}/>
      <TouchableOpacity onPress={handleFuncProp}>
        <Text>{textBtnProp}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SmallBoxComp4

const styles = StyleSheet.create({
  main:{
    borderColor: 'gray',
    borderWidth: 2,
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow for Android
    elevation: 5,
  },
  selectedBox: {
    borderColor: 'red',
    // Enhanced shadow when selected
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  }
})