import React from 'react';
import {View, StyleSheet} from 'react-native';

import Header from '../components/Header';

import HomeScreen from '../screens/HomeScreen';


const CurrentScreen = (props) => {
	let currentScreen;
	currentScreen = <HomeScreen />
	return (
		<View style={styles.screen}>
			<Header />
			{currentScreen}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		margin: 0
	}
});

export default CurrentScreen;