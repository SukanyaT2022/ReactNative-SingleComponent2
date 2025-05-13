import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

interface singleBoxProp {
  titleprop: string;
  subtitleProp: string;
  priceProp: string;
  offerList: string[];
  imageProp: ImageSourcePropType;
  changeBorderColorFuncProp: () => void;
  selected?: boolean;
  disabledProp?: boolean;
}

const SmallBox = ({
  titleprop,
  subtitleProp,
  priceProp,
  offerList,
  imageProp,
  changeBorderColorFuncProp,
  selected = false,
  disabledProp = false
}: singleBoxProp) => {
  return (
    <View style={[
      styles.main,
      selected ? styles.selectedBox : styles.unselectedBox
    ]}>
      <View style={styles.wrapTitleImage}>
        <Text style={styles.title}>{titleprop}</Text>
        <Image source={imageProp} style={{width:50, height:50}}/>
      </View>
      <Text style={styles.subtitle}>{subtitleProp}</Text>
     
      {offerList.map((item, index) => {
        return (
          <View style={styles.wrapIconText} key={`offer-${item}-${index}`}>
            <Icon name="rocket" size={25} color="#900" />
            <Text>{item}</Text>
          </View>
        );
      })}

      <View style={styles.wrapPriceBtn}>
        <Text style={styles.price}>
          {priceProp}
          <Text style={{fontSize: 14}}> /rental</Text>
        </Text>
        <TouchableOpacity
          onPress={changeBorderColorFuncProp}
          disabled={disabledProp}
          style={[
            styles.wrapIconAddTextBtn,
            selected ? styles.selectedButton : styles.unselectedButton
          ]}>
          <Icon name="rocket" size={25} color={selected ? "white" : "#900"}/>
          <Text style={[styles.addText, selected && {color: 'white'}]}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SmallBox;

const styles = StyleSheet.create({
  main: {
    borderWidth: 2,
    padding: 20,
    gap: 10,
    borderRadius: 20,
    marginVertical: 20,
  },
  selectedBox: {
    borderColor: 'orange',
    borderWidth: 3,
  },
  unselectedBox: {
    borderColor: 'green',
    borderWidth: 2,
  },
  wrapTitleImage:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  wrapIconText: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'semibold',
    flexWrap: 'wrap',
    maxWidth: '80%',
  },
  subtitle: {
    fontSize: 17,
    fontWeight: 'semibold',
  },
  wrapPriceBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  wrapIconAddTextBtn: {
    flexDirection: 'row',
    gap: 5,
    borderWidth: 2,
    borderRadius: 30,
    paddingVertical: 7,
    paddingHorizontal: 12,
  },
  selectedButton: {
    backgroundColor: 'orange',
    borderColor: 'orange',
  },
  unselectedButton: {
    backgroundColor: 'black',
    borderColor: 'green',
  },
  price: {
    fontSize: 22,
    fontWeight: 'semibold',
  },
  addText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
