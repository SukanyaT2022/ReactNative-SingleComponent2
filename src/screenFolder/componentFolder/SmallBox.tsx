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
  priceProp: number;
  offerList: string[];
  imageProp: ImageSourcePropType;
  changeBorderColorFunc: () => void;
  selected?: boolean;
}
const SmallBox = ({
  titleprop,
  subtitleProp,
  priceProp,
  offerList,
  imageProp,
changeBorderColorFunc,
selected = false,
}: singleBoxProp) => {


  return (
    <View style={styles.main}>
      <View style={styles.wrapTitleImage}>
      <Text style={styles.title}>{titleprop}</Text>
      <Image source={imageProp} style={{width:50, height:50}}/>
      </View>
      <Text style={styles.subtitle}>{subtitleProp}</Text>
     
      {offerList.map((item, index) => {
        return (
          <View style={styles.wrapIconText} key={index}>
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
        onPress={changeBorderColorFunc}
        disabled={selected}
        style={[styles.wrapIconAddTextBtn, selected && {backgroundColor:'orange'}]}>
          <Icon name="rocket" size={25} color="#900"/>
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SmallBox;

const styles = StyleSheet.create({
  main: {
    borderWidth: 2,
    borderColor: 'green',
    padding: 20,
    gap: 10,
    borderRadius: 20,
    marginVertical: 20,
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
borderWidth:2,
borderRadius:30,
paddingVertical:7,
paddingHorizontal:12,
backgroundColor:'black',
  },
  price: {
    fontSize: 22,
    fontWeight: 'semibold',
  },
  addText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
  
  },

});
