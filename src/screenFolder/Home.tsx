import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {screen} from '../../App';
import SmallBox from './componentFolder/SmallBox';
import {data} from './constantData/data';

const Home = ({navigation}: any) => {
  return (
    <View>
      <Text>home</Text>

      {/* <TouchableOpacity onPress={()=>navigation.navigate(screen.contactScreen)}><Text>go to contact screen</Text></TouchableOpacity> */}

      <FlatList
        data={data}
        keyExtractor={(item: any) => item.id}
        renderItem={({item}: any) => (
          <SmallBox
            titleprop={item.title}
            imageProp={item.Image}
            subtitleProp={item.subtitle}
            offerList={item.text}
            priceProp={item.price}
          />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
