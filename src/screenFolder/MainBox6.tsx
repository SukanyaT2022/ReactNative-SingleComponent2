import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SmallBox6 from './componentFolder/SmallBox6'
import { data } from './constantData/data'

const MainBox6 = () => {
  const [selectedID, setSelectedID] = useState<string | null>(null)

  const handleSelectionFunc = (id: string) => {
    setSelectedID(prev => prev === id ? null : id)
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {data && data.map((item, index) => {
          const disableVar = selectedID && selectedID !== item.id;
          return (
            <SmallBox6
              key={index}
              titleProp={item.title}
              subtitleProp={item.subtitle}
              imageProp={item.image}
              handleFuncProp={() => handleSelectionFunc(item.id)}
              btnTextProp="click me"
              selectProp={selectedID === item.id}
              disabledProp={disableVar}
            />
          )
        })}
      </ScrollView>
    </View>
  )
  return (
    <View>
      {data && data.map((item, index) => {
        const disableVar = selectedID && selectedID !== item.id;
        return (
          <SmallBox6
            key={index}
            titleProp={item.title}
            subtitleProp={item.subtitle}
            imageProp={item.image}
            handleFuncProp={() => handleSelectionFunc(item.id)}
            btnTextProp="click me"
            selectProp={selectedID === item.id}
            disabledProp={disableVar}
          />
        )
      })}
    </View>
  )
}

export default MainBox6

const styles = StyleSheet.create({})