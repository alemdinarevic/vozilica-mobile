import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = (props) => {
  return (
		<TextInput {...props} style={{...styles.input, ...props.style}}/>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 50,
		width: '90%',
		borderColor: 'grey',
		borderWidth: 1,
		borderRadius: 10,
		marginVertical: 5,
		padding: 10
	}
});

export default Input;