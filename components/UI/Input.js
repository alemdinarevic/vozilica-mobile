import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';

const Input = (props) => {
  return (
		<TextInput {...props} style={{...styles.input, ...props.style}}/>
	);
};

const styles = StyleSheet.create({
	input: {
		//width: '90%',
		height: 50,
		borderColor: Colors.quaternary,
		borderWidth: 1,
		borderRadius: 10,
		marginVertical: 5,
		padding: 10
	}
});

export default Input;