import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AddVehicleScreen = (props) => {
	return(
		<View style={styles.screen}>
			<Text>Add vehicle screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default AddVehicleScreen;