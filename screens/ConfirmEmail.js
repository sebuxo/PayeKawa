import React, { useState } from 'react'
import axios from 'axios'
import {StyleSheet, View } from 'react-native'

import Background from '../components/Background'

import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native'


const NumberInputScreen = () => {
  const [verification, setverificationCode] = useState('');
  const navigator = useNavigation();
  

  const handleNumberChange = (text) => {
    // Allow only digits and limit to 8 characters
    const formattedText = text.replace(/[^0-9]/g, '').slice(0, 8);
    setverificationCode(formattedText);
  };

  const verify = async () => {
    console.log("zbe",verification);
    try {
      const response = await axios.post('http://192.168.1.9:3000/verify', {
        verification
      });
      console.log(response.data)

      if (response.status === 200) {
       await SecureStore.setItemAsync("password",String(response.data));
      
        navigator.navigate('Login')
        
      } else {
        console.log("nothing found")
      }
    } catch (error) {

      console.log(error);
    }
  };

  return (
    <Background>
    <View style={styles.container}>
      <Header>Enter the verification code : </Header>
      <TextInput
        placeholder="Enter Code"
        value={verification}
        onChangeText={code => setverificationCode(code)}
        keyboardType="numeric"
        maxLength={8}
        style={styles.input}
      />
      <Button mode="contained" onPress={verify}>
        Verify
      </Button>
    </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
export default NumberInputScreen;