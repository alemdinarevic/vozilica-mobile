import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Card from '../components/UI/Card';

import ListedVehicle from '../components/ListedVehicle';

const ListedVehicles = props => {
  return (
    Object.map(vehicle => {return (
      <Card>
        <Text>Your Vehicles</Text>
        <ListedVehicle />
      </Card>
    );}
    )
  );
}

const styles = StyleSheet.create({});

export default ListedVehicles;