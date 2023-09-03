import React, { useState } from 'react'
import axios from 'axios'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'

import * as SecureStore from 'expo-secure-store';


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  
  const navigator = useNavigation();
   
 

  const onLoginPressed = async () => {

    try {
        const password = await SecureStore.getItemAsync("password")
        const response = await axios.post('http://192.168.1.9:3000/login', {
          email,
          password
        });

        await SecureStore.setItemAsync("token", response.data);

        console.log(await SecureStore.getItemAsync("token"))

        navigator.navigate('Product');
      } catch (error) {
        console.error('Login error:', error);
      }      
  }

  return (
    <Background>
      <Logo />
      <Header>Welcome</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
    
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
    </Background>
  )
}

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