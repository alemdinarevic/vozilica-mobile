import React, { useEffect } from 'react';
import {View, ScrollView, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import * as postActions from '../store/actions/post';

import moment from 'moment';

import Card from './UI/Card';
import ListedVehicle from './ListedVehicle';
import { getProvidesAudioData } from 'expo/build/AR';
import { ScreenStackHeaderRightView } from 'react-native-screens';

const VehicleList = (props) => {
  let token = useSelector(state => state.auth.token)
  let posts = useSelector(state => state.post.posts)
  const dispatch = useDispatch();
  
  useEffect(() => {
		if(token) {
      dispatch(postActions.getPosts());
    }
	}, [token])
  return (
		<ScrollView style={styles.container}>
      {posts.map(post => 
        <TouchableOpacity onPress={() => 
          props.navigation.navigate({
            routeName: 'VehicleDetails',
            params: {
              post: post
            }
            })}>
          <Card style={styles.vehicleCard} key={post.id}>
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{post.title}</Text>
              <Text style={styles.price}>{post.price}KM /dan</Text>
              <Text style={styles.description}>{post.description}</Text>
              <View style={styles.postDateContainer}>
                <Text style={styles.postDate}>Posted {moment(post.created_at).format('MMM Do')}</Text>
              </View>    
            </View>
            <View style={styles.vehicleImageContainer}>
              <Image 
                source={require('../assets/images/vehicle-dummy-image.png')}
                style={styles.vehicleImage}/>
            </View>        
          </Card>
        </TouchableOpacity>
        
      )}
    </ScrollView>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems: 'center'
  },
  vehicleCard: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    marginVertical: 10
  },
  infoContainer: {
    flex: 1,
    width: '40%',
  },
  title: {
    fontSize: 18
  },
  price: {},
  description: {},
  postDateContainer: {
    //justifyContent: 'flex-end',
    position: 'relative',
    bottom: 0,
    //marginTop: 'auto'
  },
  postDate: {},
  vehicleImageContainer: {
    borderRadius: 10
  },
  vehicleImage: {
    resizeMode: 'contain',
    width: 125,
    height: 100
  }
});

export default VehicleList;