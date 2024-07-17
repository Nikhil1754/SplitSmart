import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button ,TouchableOpacity,Text} from 'react-native';
const SignUp = () => {
    const [emailBorderColor, setEmailBorderColor] = useState('white');
    const [passwordBorderColor, setPasswordBorderColor] = useState('white');
  
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
        <TouchableOpacity style={styles.button}><Text style={styles.txt}   onPress={() => {}}>Sign Up</Text></TouchableOpacity>
      </View>
    )
}

export default SignUp

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