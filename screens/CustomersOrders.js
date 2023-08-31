import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet } from 'react-native';

const ProductScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/customers/0/orders')
      .then(response => setData(response.data))
      .catch(error => console.error('hehew', error));
        
  }, []);
  console.log(data)

 return (
    <View style={styles.container}>
      {data.length > 0 ? (
        data.map(item => (
          <View key={item._id} style={styles.itemContainer}>
            <Text style={styles.createdAt}>{item.createdAt}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.details.price}</Text>
            <Text style={styles.description}>{item.details.description}</Text>
            <Text style={styles.color}>{item.details.color}</Text>
            <Text style={styles.stock}>{item.stock}</Text>
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
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  color: {
    fontSize: 16,
  },
  stock: {
    fontSize: 16,
  },
});

export default ProductScreen;
