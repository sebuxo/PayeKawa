import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen({ navigation }) {
  const [firstname, setfirstName] = useState()
  const [lastname, setlastName] = useState()
  const [email, setEmail] = useState()
  const navigator = useNavigation();
  

  const handleRegister = async () => {

    try {
        
        const response = await axios.post('http://192.168.1.9:3000/register', {
          email,
          firstname,
          lastname
        });
        navigator.navigate('Confirm');
      } catch (error) {
        console.error('Login error:', error);
      }

      
  }

  return (
    <Background>
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="firstName"
        returnKeyType="next"
        value={firstname}
        onChangeText={(textfname) => setfirstName(textfname)}
   
      />
      <TextInput
        label="lastName"
        returnKeyType="next"
        value={lastname}
        onChangeText={(textlname) => setlastName(textlname)}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={(textmail) => setEmail(textmail)}
  
      />
    
      <Button
        mode="contained"
        onPress={handleRegister}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
