import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


interface SmallBox4Prop{
  title: string;
  subtitle: string;
  imageProp: ImageSourcePropType;
  textBtnProp: string;
  selectedProp: boolean;
  handleFuncProp: () => void;
  disableProp?: boolean;
}

const SmallBoxComp4 = ({
  title, 
  subtitle, 
  imageProp, 
  textBtnProp, 
  selectedProp,
  handleFuncProp,
  disableProp,
}: SmallBox4Prop) => {
  const changeBordoerColorFunc = () => {

  }
  
  return (
    <View style={[
      styles.main, 
      disableProp && styles.selectedBox
    ]}>
      <Text>SmallBoxComp4</Text>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
      <Image source={imageProp} style={{width:50, height:50}}/>
      <TouchableOpacity 
      onPress={handleFuncProp}
      disabled={disableProp}>
        <Text style = {[styles.btnstyle, disableProp && styles.changeColorClickBtn]}>{textBtnProp}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SmallBoxComp4

const styles = StyleSheet.create({
  main:{
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    // Matching box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px
    shadowColor: 'rgba(0, 0, 0, 0.35)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    // For Android
    elevation: 8,
  },
  selectedBox: {
    borderColor: 'red',
    // Smoother enhanced shadow when selected
    shadowColor: 'rgba(0, 0, 0, 0.35)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 8,
  },
  btnstyle:{
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
  },
  changeColorClickBtn:{
    backgroundColor: 'lightblue',
  }
})