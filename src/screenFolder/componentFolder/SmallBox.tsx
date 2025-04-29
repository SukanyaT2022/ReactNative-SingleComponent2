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
}
const SmallBox = ({
  titleprop,
  subtitleProp,
  priceProp,
  offerList,
  imageProp,
}: singleBoxProp) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{titleprop}</Text>
      <Text style={styles.subtitle}>{subtitleProp}</Text>
      <Image source={imageProp} style={{width:50, height:50}}/>
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
          ${priceProp}
          <Text style={{fontSize: 14}}> /rental</Text>
        </Text>
        <TouchableOpacity style={styles.wrapIconAddTextBtn}>
          <Icon name="rocket" size={25} color="#900" />
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
  wrapIconText: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'semibold',
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
  },
  price: {
    fontSize: 22,
    fontWeight: 'semibold',
  },
  addText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
