import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const NumberInputScreen = () => {
  const [verificationCode, setverificationCode] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleNumberChange = (text) => {
    // Allow only digits and limit to 8 characters
    const formattedText = text.replace(/[^0-9]/g, '').slice(0, 8);
    setverificationCode(formattedText);
  };

  const Verify = async () => {
    try {
      const response = await axios.post('https://localhost:3001/Verify', {
        code: number,
      });

      if (response.status === 200) {
        setResponseMessage('Email Verified !');
      } else {
        setResponseMessage('Failed to verify. Please try again.');
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter the verification code : </Text>
      <TextInput
        placeholder="Enter Code"
        value={number}
        onChangeText={handleNumberChange}
        keyboardType="numeric"
        maxLength={8}
        style={styles.input}
      />
      <Button title="Verify" onPress={Verify} />
      <Text style={styles.responseMessage}>{responseMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  responseMessage: {
    marginTop: 20,
    color: 'green',
    fontStyle: 'italic',
  },
});

export default NumberInputScreen;