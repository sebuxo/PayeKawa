import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'; // Create this component
import ProductScreen from './screens/ProductScreen';

import CustomersScreen from './screens/CustomersScreen';
import CustomersOrders from './screens/CustomersOrders';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CustomersOrders">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CustomersOrders" component={CustomersOrders}/>
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Customers" component={CustomersScreen} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;