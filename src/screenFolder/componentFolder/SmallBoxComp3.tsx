import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
interface SmallBoxCompProp {
  textProp: string;
  btnText: string;
  handleFuncProp: () => void;
  changeColorProp: boolean;
  disableProp?: boolean;
}
const SmallBoxComp3 = ({
  textProp,
  btnText,
  handleFuncProp,
  changeColorProp,
  disableProp,
}: SmallBoxCompProp) => {
  return (
    <View style={[styles.main, changeColorProp && {borderColor: 'orange'}]}>
      <Text>{textProp}</Text>
      <TouchableOpacity onPress={handleFuncProp} disabled ={disableProp}>
      <Text>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SmallBoxComp3;

const styles = StyleSheet.create({
  main: {

    borderWidth: 3,
  },
  none: {},
});
