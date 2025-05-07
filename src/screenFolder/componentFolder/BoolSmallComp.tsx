import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
interface BoolCompProp {
  text: string;
  buttonTextProp: string;
  disable: boolean;
  selectdProp: boolean;
  handleFuncProp: ()=>void
}

const BoolSmallComp = ({ handleFuncProp, text, buttonTextProp, disable,  selectdProp,}:BoolCompProp) => {

  return (
    <View style={[styles.main, selectdProp && {borderColor: 'red'}]}>
      <Text>{text}</Text>
      <TouchableOpacity
        onPress={handleFuncProp}
        // disabled = {selected}
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
