import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import Logo from './Logo';
import Colors from '../constants/Colors';

const Header = (props) => {
  return (
		<View style={styles.header}>
			<View style={styles.logoContainer}>
				<Logo />
			</View>
			{/* <Text style={styles.loginLink}>Prijavi se</Text> */}
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		marginVertical: 0,
		marginHorizontal: 0,
		width: '100%',
		height: '10%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: Colors.secondary
	},
	logoContainer: {
		marginTop: Dimensions.get('window').height * 0.025,
		marginLeft: Dimensions.get('window').width * 0.3,
	},
	loginLink: {
		color: 'white', 
		marginHorizontal: 10,
		marginTop: Dimensions.get('window').height * 0.03
	}
});

export default Header;