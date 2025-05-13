import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SmallBoxComp3 from './componentFolder/SmallBoxComp3';
import { data } from './constantData/data';

const MainBax3 = () => {
  const [selected, setSelected] = useState<boolean>(false);
  const [selectedID, setSelectedID] = useState<string | null>(null);
  const ChangeColorFunc = (id:string) => {
    setSelected(!selected); // Fix: Toggle the selected state correctly
    setSelectedID(prev => prev === id ? null : id)
  };

  return (
    <View>
      {data.map((item, index) => {
        //this line do disable btn
        const disableVar = selectedID && selectedID !== item.id;
        return (
          <SmallBoxComp3
            key={index}
            textProp={item.title}
            btnText="click me"
            handleFuncProp={()=>ChangeColorFunc(item.id)}
            changeColorProp={!disableVar as any}
             //this line do disable btn
            disableProp={disableVar as any} // Pass the disable
          />
        );
      })}
    </View>
  );
};

export default MainBax3;

const styles = StyleSheet.create({});
