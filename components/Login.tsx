import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button ,TouchableOpacity,Text} from 'react-native';

import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import MainHandle from './screens/MainHandle';

const Login = () => {
    const [emailBorderColor, setEmailBorderColor] = useState('white');
    const [passwordBorderColor, setPasswordBorderColor] = useState('white');
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const handleLogin=()=>{
      navigation.navigate('MainHandle');
    }
    return (
      <View style={styles.container}>
        <View style={styles.formGroup}>
          <TextInput
            style={[styles.input, { borderBottomColor: emailBorderColor }]}
            placeholder="Email Address"
            placeholderTextColor="#fff"
            onFocus={() => setEmailBorderColor('pink')}
            onBlur={() => setEmailBorderColor('white')}
          />
        </View>
        <View style={styles.formGroup}>
          <TextInput
            style={[styles.input, { borderBottomColor: passwordBorderColor }]}
            placeholder="Password"
            placeholderTextColor="#fff"
            secureTextEntry
            onFocus={() => setPasswordBorderColor('pink')}
            onBlur={() => setPasswordBorderColor('white')}
          />
        </View>
        <TouchableOpacity style={styles.button}><Text style={styles.txt}   onPress={handleLogin}>Log in</Text></TouchableOpacity>
    
        <TouchableOpacity><Text  style={{color:'white'}}>Forgot your password ?</Text></TouchableOpacity>
           

      </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#632696',
    },
    formGroup: {
      marginBottom: 20,
    },
    input: {
      width: 250,
      color: 'white',
      borderBottomWidth: 2,
      paddingVertical: 10,
      fontSize: 16,
    },
    button: {
        marginVertical: 20, 
        backgroundColor:'#872696',
        width:280,
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