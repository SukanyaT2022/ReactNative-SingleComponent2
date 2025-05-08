import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
interface SmallBoxCompProp {
  textProp: string;
  btnText: string;
  handleFuncProp: () => void;
  changeColorProp: boolean;
}
const SmallBoxComp3 = ({
  textProp,
  btnText,
  handleFuncProp,
  changeColorProp,
}: SmallBoxCompProp) => {
  return (
    <View style={[styles.main, changeColorProp && {borderColor: 'orange'}]}>
      <Text>{textProp}</Text>
      <TouchableOpacity onPress={handleFuncProp}>
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
