import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
interface BoolCompProp {
  text: string;
  buttonTextProp: string;
  disableProp: boolean;
  selectdProp: boolean;
  handleFuncProp: (selected: boolean) => void
}

const BoolSmallComp = ({ handleFuncProp, text, buttonTextProp, disableProp,  selectdProp,}:BoolCompProp) => {

  return (
    <View style={[styles.main, selectdProp && {borderColor: 'red'}]}>
      <Text>{text}</Text>
      <TouchableOpacity
        onPress={()=>handleFuncProp(!selectdProp)}
        disabled= {disableProp}
        style={styles.btn}>
        <Text>{buttonTextProp}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BoolSmallComp;

const styles = StyleSheet.create({
  main: {
    borderColor: 'gray',
    borderWidth: 2,
  },
  btn: {
    backgroundColor: 'green',
  },
});
