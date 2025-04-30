import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {screen} from '../../App';
import SmallBox from './componentFolder/SmallBox';
import {data} from './constantData/data';

const Home = ({navigation}: any) => {
const [borderColor, setBorderColor] = React.useState('green');
// const [selected, setSelected] = React.useState("");
const [selected, setSelected] = React.useState<string[]>([]);
console.log(selected)
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
            imageProp={item.image}
            subtitleProp={item.subtitle}
            offerList={item.text}
            priceProp={item.price}
            changeBorderColorFunc={() =>
             setSelected(item.id)
              
            }
            selected={selected === item.id}
            
          />

        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
