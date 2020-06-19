import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

import moment from 'moment';

import Card from '../components/UI/Card';
import Colors from '../constants/Colors';
import ConfirmButton from '../components/Buttons/ConfirmButton';

const VehicleDetailsScreen = props => {

  //Go back to User Screen instead of Home. Fix.
  VehicleDetailsScreen.navigationOptions = {
    headerLeft: (
      <Button
        onPress={() => props.navigation.navigate('User')}
        title="Back"
        //color="#fff"
      />
    )
  }
  
  //console.log(props.navigation.state.params);
  let vehicle = props.navigation.state.params.post;
  return (
    <View style={styles.screen}>
      <View style={styles.vehicleImageContainer}>
        <Image 
          source={require('../assets/images/vehicle-dummy-image.png')}
          style={styles.vehicleImage}/>
      </View>   
      <View style={styles.postDateContainer}>
          <Text style={styles.postDate}>Posted {moment(vehicle.created_at).format('MMM Do')}</Text>
      </View> 
      <View style={styles.infoContainer}>
        
        <Card style={styles.infoCard}>
          <Text style={styles.title}>{vehicle.title}</Text>
        </Card>
        
        <Card style={styles.infoCard}>
          <Text>{vehicle.fuel}</Text>
        </Card> 
        
        <Card style={styles.infoCard}>
          <Text style={styles.description}>{vehicle.description}</Text>
        </Card>
        
        <Card style={styles.infoCard}>
          <Text>{vehicle.hp}hp</Text>
        </Card>

        <Card style={styles.infoCard}>
         <Text>{vehicle.number_of_seats} seats</Text>
        </Card>

        <Card style={styles.infoCard}>
          <Text>{vehicle.milage}km</Text>
        </Card>

        <Card style={styles.infoCard}>
          <Text>{vehicle.transmission}</Text>
        </Card>

        <Card style={styles.infoCard}>
          <Text>{vehicle.production_year}</Text>
        </Card>
        
        <Card style={styles.infoCard}>
          <Text style={styles.price}>{vehicle.price}KM /dan</Text>
        </Card>    
      </View>

      <ConfirmButton>Bukiraj</ConfirmButton>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.primary,
    padding: 10
  },
  vehicleImageContainer: {
    borderRadius: 10
  },
  vehicleImage: {
    borderRadius: 5
  },
  postDate: {
    color: 'white'
  },
  infoContainer: {
    flexDirection: 'row',
		display: 'flex',
		flexWrap: 'wrap',
		paddingVertical: 15,
		paddingHorizontal: 20,
		marginTop: 0,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'stretch',
  },
  infoCard: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    margin: 10,
    height: 30
  },
  
});

export default VehicleDetailsScreen;