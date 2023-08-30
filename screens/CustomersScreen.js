import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet } from 'react-native';

const CustomersScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.0.13:3001/customers')
      .then(response => setData(response.data))
      .catch(error => console.error('No customers found', error));
        
  }, []);
  // console.log(data)
  const renderOrdersCount = async (customerId) => {
    try {
      const response = await axios.get(`http://192.168.0.13:3001/customers/${customerId}/orders`);
      const customerOrders = response.data;
      const ordersCount = customerOrders.length;
      return <Text>{`${ordersCount} Orders`}</Text>;
    } catch (error) {
      console.error('Error fetching customer orders', error);
      return <Text>Error fetching orders</Text>;
    }
  };
  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        data.map(item => (
          <View key={item._id} style={styles.card}>
            <Text style={styles.createdAt}>{item.createdAt}</Text>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        ))
      ) : (
        <Text>Loading data...</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  createdAt: {
    fontSize: 16,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
export default CustomersScreen;
