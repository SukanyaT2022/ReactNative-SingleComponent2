import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
interface BoolCompProp{
    text:string,
    buttonTextProp:string,
disable: boolean,

}

const BoolSmallComp = (text:string, buttonTextProp:string, disable:boolean) => {

 const [selected, setSelected] = useState<boolean>(false)

const handleFunc =()=>{
setSelected(true)
}

  return (
    <View style={[styles.main, selected && {borderColor:'red'}]}>
<Text>BoolSmallComp</Text>
<TouchableOpacity
onPress={handleFunc}
disabled = {selected}
style ={styles.btn}
>
    <Text >{buttonTextProp}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default BoolSmallComp

const styles = StyleSheet.create({
    main:{
        borderColor:'gray',
        borderWidth:2,
    },
    btn:{
backgroundColor:'green'
    },
})