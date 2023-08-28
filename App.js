import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'; // Create this component
import ProductScreen from './screens/ProductScreen';
import CustomersScreen from './screens/CustomersScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Customers">
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Register" Component={RegisterScreen} /> */}
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Customers" component={CustomersScreen} />
        {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;