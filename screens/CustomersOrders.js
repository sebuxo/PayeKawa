import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet } from 'react-native';

const CustomersOrders = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/customers/0/orders')
      .then(response => setData(response.data))
      .catch(error => console.error('orders not found', error));
        
  }, []);
  //console.log(data)

 return (
    <View style={styles.container}>
      {data.length > 0 ? (
        data.map(item => (
          <View key={item._id} style={styles.itemContainer}>
            <Text style={styles.createdAt}>{item.createdAt}</Text>
            <Text style={styles.customer}>{item.customerId}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  createdAt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
 
  customer: {
    fontSize: 18,
  }
});

export default CustomersOrders;
