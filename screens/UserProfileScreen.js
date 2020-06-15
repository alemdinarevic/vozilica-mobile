import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

import Colors from '../constants/Colors';
import VehicleList from '../components/VehicleList';

const UserProfileScreen = (props) => {
	return (
		<View style={styles.screen}>
			
			<View style={styles.profileHeader}>

				<View style={styles.profilePictureContainer}>
					<Image 
						source={require('../assets/images/dummy-profile-pic.png')}
						style={styles.profilePicture}
						resizeMode="cover"/>
				</View>

				<View style={styles.userInfoContainer}>
					<Text style={styles.userInfoTexq	}>username</Text>
					<Text style={styles.userInfoText}>061123123</Text>
				</View>

				<View style={styles.userStatsContainer}>
					<Text style={styles.userInfoText}>Ducats: #</Text>
					<Text style={styles.userInfoText}>Vehicles owned: #</Text>
					<Text style={styles.userInfoText}>Vehicles rented: #</Text>
				</View>

			</View>

			<VehicleList />

		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Colors.primary
	},
	profileHeader: {
		width: '100%',
		height: Dimensions.get('window').height * 0.15,
		flexDirection: "row",
		backgroundColor: Colors.secondary,
		borderBottomWidth: .25,
		borderBottomColor: 'white'
	},
	profilePictureContainer: {
		marginVertical: Dimensions.get('window').height * 0.05,
		marginLeft: Dimensions.get('window').width * 0.05,
		width: Dimensions.get('window').width * 0.125,
		height: Dimensions.get('window').width * 0.125,
		borderRadius: Dimensions.get('window').width * 0.125 / 2,
		borderWidth: 1,
		borderColor: 'black',
		overflow: 'hidden'
	},
	profilePicture: {
		width: '100%',
		height: '100%'
	},
	userInfoContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: Dimensions.get('window').width * -0.05,
		marginTop: Dimensions.get('window').height * 0.025
	},
	userStatsContainer: {
		flex: 1,
		color: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: Dimensions.get('window').height * 0.025
	},
	userInfoText: {
		color: 'lightgrey'
	}
});

export default UserProfileScreen;