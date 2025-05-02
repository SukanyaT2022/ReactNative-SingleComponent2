import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {screen} from '../../App';
import SmallBox from './componentFolder/SmallBox';
import {data} from './constantData/data';

const Home = ({navigation}: any) => {
const [borderColor, setBorderColor] = React.useState('green');
// below click which box use id identify which box is selected
const [selectedIDs, setSelectedIDs] = React.useState<string[]>([]);

// const [activeID, setActiveID] = React.useState(undefined);

// we need function take id that we click on and put in selectedIDs
const changeBorderColorFunc = (id: string) => {
  if (selectedIDs.includes(id)) {
    setSelectedIDs(selectedIDs.filter(item => item !== id));
  } else {
    setSelectedIDs([...selectedIDs, id]);
  }

}

//step 1 disable
// const itemIDsVar = data.flatMap((item: any) => item.id);
//  console.log('itemIDsVar', itemIDsVar);

//  const disableOtherIDs = (id: string) => {
//    const newIDs = itemIDsVar.filter(item => item !== id);
//    setActiveID(id) as any
//    setSelectedIDs(newIDs);
//  }

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
            changeBorderColorFuncProp={() =>
           changeBorderColorFunc(item.id)
          // disableOtherIDs(item.id)
              
            }
          
            selected={selectedIDs.includes(item.id)}
            //slected from smallbox component  and
            // when click it will put id in selectedIDs so btn change color to ornage
            
          />

        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
