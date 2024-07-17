import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SignUp from './SignUp';
import Login from './Login';
const Main = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handleLogin=()=>{
    navigation.navigate('Login');
  }
  const handleSignUp=()=>{
    navigation.navigate('SignUp');
  }
  return (
    <View style={styles.main}>
      <Image style={styles.logo} source={require('./images/logoSplit.png')} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}><Text style={styles.txt}>Sign up</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}><Text style={styles.txt}>Log in</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor:'#632696'
  },

  logo: {
    marginTop: 100, // Adjust this value as needed
    marginBottom: 40,
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  buttonContainer: {
    alignItems: 'center',
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
 
});

export default Main;
