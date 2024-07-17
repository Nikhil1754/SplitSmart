/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './components/Splash';
import Main from './components/Main';
import SignUp from './components/SignUp';
import Login from './components/Login';
import MainHandle from './components/screens/MainHandle';



const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  

  return (
  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="Main" component={Main} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="MainHandle" component={MainHandle} />
    <Stack.Screen name="SignUp" component={SignUp} />
    
  </Stack.Navigator>
</NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor:'#632696'
  },

  logo: {
    marginTop: 200, // Adjust this value as needed
    marginBottom: 40,
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent:'space-between',

  },
  button: {
    marginVertical: 20, 
    backgroundColor:'#872696',
    width:400,
    height:40,
    borderRadius:40,
    borderColor:'white',
    alignItems:'center',
    justifyContent:'center',
  },
  txt: {
    color: 'white',
    fontSize: 20,
    fontWeight:'500'
    
  },
  terms:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  }
});


export default App;
