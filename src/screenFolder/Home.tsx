import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {screen} from '../../App';
import SmallBox from './componentFolder/SmallBox';
import {data} from './constantData/data';

const Home = ({navigation}: any) => {
  // Track the currently selected item ID
  const [selectedOneID, setSelectedOneID] = React.useState<string | null>(null);

  const handleOnPress = (id: string) => {
    // If clicking the same item, deselect it
    setSelectedOneID((prev) => (prev === id ? null : id));
  };

  return (
    <View>
      <Text>home</Text>

      {/* <TouchableOpacity onPress={()=>navigation.navigate(screen.contactScreen)}><Text>go to contact screen</Text></TouchableOpacity> */}

      <FlatList
        data={data}
        keyExtractor={(item: any) => item.id}
        renderItem={({item}: any) => {
          return (
            <SmallBox
              titleprop={item.title}
              imageProp={item.image}
              subtitleProp={item.subtitle}
              offerList={item.text}
              priceProp={item.price}
              changeBorderColorFuncProp={() => handleOnPress(item.id)}
              selected={selectedOneID === item.id}
              disabledProp={selectedOneID !== null && selectedOneID !== item.id}
            />
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
