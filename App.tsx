/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screenFolder/Home';
import Contact from './src/screenFolder/Contact';
import Practice from './src/screenFolder/Practice';
import BoolCompMainScreen from './src/screenFolder/BoolCompMainScreen';
import MainBax3 from './src/screenFolder/MainBax3';

const Stack = createNativeStackNavigator();
export const screen = {
 home: 'Home',
 contactScreen: 'Contact',
practiceScreen: 'Practice',
boolCompMainScreen: 'BoolCompMainScreen',
mainBax3: 'MainBax3',
}
function App(){
 
  return (

    <NavigationContainer>
{/* <Stack.Navigator initialRouteName={screen.home}> */}
{/* <Stack.Navigator initialRouteName={screen.boolCompMainScreen}> */}
<Stack.Navigator initialRouteName={screen.mainBax3}>
{/* <Stack.Navigator initialRouteName={screen.practiceScreen}> */}
<Stack.Screen name = {screen.home} component={Home}/>
<Stack.Screen name = {screen.contactScreen} component={Contact}/>
<Stack.Screen name = {screen.practiceScreen} component={Practice}/>
<Stack.Screen name = {screen.boolCompMainScreen} component={BoolCompMainScreen}/>
<Stack.Screen name = {screen.mainBax3} component={MainBax3}/>
</Stack.Navigator>


      </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  
});

export default App;
