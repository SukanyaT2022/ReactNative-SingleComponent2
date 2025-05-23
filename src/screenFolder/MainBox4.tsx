import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmallBoxComp4 from './componentFolder/SmallBoxComp4'
import {data} from './constantData/data'
interface MainBox4Prop{

}

const MainBox4 = () => {

  const [selected, setSelected] = React.useState(false)

  const [selectedID, setSelectedID] = React.useState<string | null>(null)

  const changeColorDisableFunc = (id:string) => {
    setSelected(!selected)
  
    setSelectedID(prev => prev === id ? null : id)
  }
  return (
    // <View>
    //   <Text>MainBox4</Text>
    //   <SmallBoxComp4 
    //   title = 'title 1'
    //   subtitle='subtitle 1'
    //   imageProp={require('../screenFolder/assets/images/imgDog1.jpg')}
    //   textBtnProp='click me 1'
    //   handleFuncProp={() => setSelected(!selected)}
    //   selectedProp={selected}
      
    //   />
    // </View>
  
    <View>
      {
data && data.map((item, index) => {
   const disableVar = selectedID && selectedID !== item.id;
   //above something id not select id is disable
 return <SmallBoxComp4 
  title = {item.title}
  subtitle = '{item.subtitle}'
  imageProp={item.image}
  // ${index + 1} make click me 1 2 3
  textBtnProp={`click me ${index + 1}`}
  handleFuncProp={() =>changeColorDisableFunc(item.id)}
  selectedProp={selected}
  disableProp={disableVar as any} // Pass the disable
  />
      })}
    
    </View>
    )

}

export default MainBox4

const styles = StyleSheet.create({})