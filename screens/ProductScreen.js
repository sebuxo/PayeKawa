import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text,FlatList,TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

const ProductScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    SecureStore.getItemAsync("token").then((apiKey)=>axios.get('http://192.168.1.9:3001/products',{
      headers: {
        'x-api-key': apiKey
      },
    })
      .then(response => setData(response.data))
      .catch(error => console.error('Not found', error))
      )
    
        
  }, []);


  const handleProductPress = (productId) => {
    const product = data.find(product => product.id ==productId);
    console.log(product)
    navigation.navigate('ProductDetail', { product });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item.id)}>
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.details.price}</Text>
      <Text style={styles.productDescription}>{item.details.description}</Text>
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Assuming 'id' is a unique identifier
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 16, // Add padding to separate items
  },
  productItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16, // Margin between items
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  productName: {
    fontSize: 24,
    color: '#000000',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    color: '#560CCE',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#414757',
  },
});

export default ProductScreen;
