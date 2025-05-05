import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmallBoxPractice from './componentFolder/SmallBoxPractice'
import {data} from './constantData/data';


const Practice = () => {
  return (
    <View>
        {/* <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <Item title={item.title} />}
              contentContainerStyle={styles.container}
        
            /> */}
      <Text>Practice</Text>
      <SmallBoxPractice/>
    </View>
  )
}

export default Practice

const styles = StyleSheet.create({
    container:{
        
    }
})