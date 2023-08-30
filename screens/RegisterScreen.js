import React, { useState ,useEffect} from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname,setFirstName] = useState('');
  const [lastname,setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password === confirmPassword) {
    
      try {
        const response = await axios.post('http://localhost:3000/register', {
          email: email,
          password: password,
          firstname : firstname,
          lastname : lastname
        });

        if (response.status === 200) {
         
          navigation.navigate('Confirmation');
        } else {
         
          alert('Registration failed. Please try again.');
        }
      } catch (error) {
        
        console.log(error)
      }
    } else {
      alert("Passwords don't match!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="firstName"
        value={firstname}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <TextInput
        placeholder="lastName"
        value={lastname}
        onChangeText={setLastName}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
      />
      <Button title="Register" onPress={handleRegister} />
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
});

export default RegisterScreen;
