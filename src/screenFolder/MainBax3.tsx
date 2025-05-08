import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SmallBoxComp3 from './componentFolder/SmallBoxComp3';
import { data } from './constantData/data';

const MainBax3 = () => {
  const [selected, setSelected] = useState<boolean>(false);

  const ChangeColorFunc = () => {
    setSelected(!selected); // Toggle the selected state
  };

  return (
    <View>
      {data.map((item, index) => {
        return (
          <SmallBoxComp3
            key={index}
            textProp={item.title}
            btnText= "click me"
            handleFuncProp={ChangeColorFunc}
            changeColorProp={selected}
          />
        );
      })}
    </View>
  );
};

export default MainBax3;

const styles = StyleSheet.create({});
