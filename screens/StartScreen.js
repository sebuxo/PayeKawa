import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import ip from '../components/Ipaddress'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Login Template</Header>
      <Paragraph>
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Login')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Register')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
