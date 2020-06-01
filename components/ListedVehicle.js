import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const listedVehicle = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.vehicleImageContainer}>
      <Image 
        style={styles.vehicleImage}/>
      </View>
      <Text style={styles.title}>Title</Text>
      <Text style={styles.price}>Price</Text>
      <Text style={styles.description}>Short Description</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  title: {},
  price: {},
  description: {}
});

export default listedVehicle;