import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import * as postActions from '../store/actions/post';

import Card from './UI/Card';
import ListedVehicle from './ListedVehicle';

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
		<View style={styles.container}>
      {posts.map(post => 
        <Card key={post.id}>
          <View style={styles.vehicleImageContainer}>
            <Image 
              style={styles.vehicleImage}/>
          </View>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.price}>{post.price}KM /dan</Text>
          <Text style={styles.description}>Short Description</Text>
        </Card>
      )}
    </View>
	);
}

const styles = StyleSheet.create({
  container: {},
  vehicleImageContainer: {},
  vehicleImage: {},
  title: {},
  price: {},
  description: {}
});

export default VehicleList;