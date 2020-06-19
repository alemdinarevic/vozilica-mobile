import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Colors from '../../constants/Colors';

const DatePickerButton = (props) => {
	return (
		<TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
			<View style={{...styles.button, ...props.style}}>
				<Text style={styles.buttonText}>{props.children}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.secondary,
		width: 100,
		height: 50,
		paddingVertical: 15,
		paddingHorizontal: 30,
		borderRadius: 15,
		alignItems: 'center'
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		textAlign: 'center'
        
	}
});

export default DatePickerButton;