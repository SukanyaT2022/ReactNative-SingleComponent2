import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface Box6prop {
  titleProp: string;
  subtitleProp: string;
  imageProp: string;
  handleFuncProp: () => void;
  btnTextProp: string;
  selectProp: boolean;

}

const SmallBox6 = ({
  titleProp,
  subtitleProp,
  handleFuncProp,
  btnTextProp,
  selectProp,
  imageProp,
}: Box6prop) => {
  return (
    <View style={[styles.main, selectProp && styles.changeBorderColorStyle]}>
      <Text>MainBox6</Text>
      <Text>{titleProp}</Text>
      <Text>{subtitleProp}</Text>
      <Image
        source={imageProp as any}
   style={{ width: 100, height: 100 }}
      />
      <TouchableOpacity 
        onPress={handleFuncProp}
        style={[styles.btnstyle, selectProp && styles.btnChangeColorStyle]}
      >
        <Text style={styles.btnText}>{btnTextProp}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SmallBox6

const styles = StyleSheet.create({
  main: {
    borderColor: 'gray',
    borderWidth: 2,
    padding: 15,
    margin: 10,
    borderRadius: 8,
  },
  changeBorderColorStyle: {
    borderColor: 'green',
    borderWidth: 3,
  },
  btnstyle: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  btnChangeColorStyle: {
    backgroundColor: 'orange',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  }
})