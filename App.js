import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreenTest from './screens/LoginScreen'
import ConfirmEmail from './screens/ConfirmEmail'

import ProductDetail from './screens/ProductDetail';
import StartScreen from './screens/StartScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} options={{
          headerLeft: () => null, 
        }} />
        <Stack.Screen name="Login" component={LoginScreenTest} options={{
          headerLeft: () => null, 
        }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{
          headerLeft: () => null, 
        }} />
        <Stack.Screen name="Product" component={ProductScreen} options={{
          headerLeft: () => null, 
        }} />
        <Stack.Screen name="Confirm" component={ConfirmEmail} options={{
          headerLeft: () => null, 
        }} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;