import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmallBoxComp5 from './componentFolder/SmallBoxComp5'
import {data} from './constantData/data'



const MainBox5 = () => {
    const [selected, setSelected] = React.useState(false)
const [selectID, setSelectedID] = React.useState<string | null>(null)
const handleChangeColorDisableFunc = (id:string) => {
  console.log("id", id)
setSelectedID(prev => prev === id ? null : id)
setSelected(!selected)
    }
  return (
    <View>

      {
data && data.map((item, index) => {
  const disableVariable:boolean = selectID && selectID !== item.id;
  return <SmallBoxComp5
    key={index}
    titleProp="title 1"
    subtitleProp="subtitle 1"
    btnTextProp="click me 1"
    handleFuncProp={() => handleChangeColorDisableFunc(item.id)}
    selectedProp={selected}
    disabledProp={disableVariable as any} // Pass the disable variable
  />
})
      }

     
    </View>
  )
}

export default MainBox5

const styles = StyleSheet.create({})