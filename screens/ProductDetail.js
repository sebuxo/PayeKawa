import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDetail = ({ route }) => {
  const product  = route.params.product;
  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.details.price}</Text>
      <Text style={styles.productDescription}>{product.details.description}</Text>
      <Text style={styles.productColor}>{product.details.color}</Text>
      <Text style={styles.productStock}>Stock: {product.stock}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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

export default ProductDetail;