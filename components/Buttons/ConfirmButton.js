import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Colors from '../../constants/Colors';

const ConfirmButton = (props) => {
	return (
		<TouchableOpacity {...props} activeOpacity={0.5} onPress={props.onPress}>
			<View style={{...styles.button, ...props.style}}>
				<Text style={styles.buttonText}>{props.children}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.tertiary,
		//marginVertical: 10,
		paddingVertical: 15,
		paddingHorizontal: 15,
        borderRadius: 25,
        width: 100,
        height: 50,
        alignItems: 'center'
	},
	buttonText: {
		color: 'white',
		fontSize: 16
	}
});

export default ConfirmButton;