import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

const Logo = (props) => {
	return (
		<View>
			<Image 
			style={styles.logo}
			source={require('../assets/images/logo.png')} 
			resizeMode='cover'
			/>
		</View>
		
	);
}
const styles = StyleSheet.create({
	// logoContainer: {
	// 	marginVertical: Dimensions.get('window').height * 0.05,
	// 	marginHorizontal: Dimensions.get('window').width * 0.05,
	// },
	logo: {
		width: Dimensions.get('window').width * 0.39,
		height: Dimensions.get('window').height * 0.073
	}
});
export default Logo;