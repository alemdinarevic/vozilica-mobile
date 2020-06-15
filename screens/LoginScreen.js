import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import { showMessage } from "react-native-flash-message";
import { useSelector, useDispatch } from "react-redux";


import * as authActions from "../store/actions/auth";
import Colors from '../constants/Colors';

import Input from '../components/UI/Input';
import Card from '../components/UI/Card';

import ConfirmButton from '../components/Buttons/ConfirmButton';
import HeaderButton from '../components/Buttons/HeaderButton';

const LoginScreen = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	
	const authHandler = () => {
    let action = authActions.login(email, password);
    setError(null);
    setIsLoading(true);

    dispatch(action)
      .then((response) => {
        setIsLoading(false);
        showMessage({
          message: "Successfully logged in",
          type: "success",
        });
        console.log('in then')
        props.navigation.navigate("Home");
      })
      .catch((error) => {
				console.log(error)
        console.log("IN CATCH OF DISPATCH auth actions");
        setError(error.message);
        setIsLoading(false);
      });
  };
	return (
		<KeyboardAvoidingView 
			style={styles.screen} 
			behavior='padding' 
			keyboardVerticalOffset={50}
		>
			<Card style={styles.authContainer}>
				<ScrollView>
					<Input 
						id='email' 
						label='E-mail' 
						placeholder='Your e-mail'
						keyboardType='email-address' 
						//required
						//email
						autoCapitalize='none'
						onChangeText={(text) => setEmail(text)} 
						errorMessage='Please enter a valid e-mail address'
						//onInputChange={() => {}}
						initialValue=''
					/>
					<Text>{email}</Text>
					<Input 
						id='password' 
						label='Password'
						placeholder='Your password'
						keyboardType='default' 
						secureTextEntry={true}
						//required
						minLength={5}
						onChangeText={(text) => setPassword(text)}
						autoCapitalize='none' 
						errorMessage='Please enter a valid password'
						// onInputChange={() => {}}
						initialValue=''
					/>
					<Text>{password}</Text>
					<View style={styles.buttonContainer}>
					<ConfirmButton 
						style={{marginVertical: 10}}
						onPress={authHandler}>
							Nastavi
					</ConfirmButton>

					<ConfirmButton 
						style={{width: 115}}
						onPress={() => props.navigation.navigate({routeName: 'Register'})}>
							Registruj se
					</ConfirmButton>
					</View>
					
					
				</ScrollView>
			</Card>
		</KeyboardAvoidingView>
	);
}

LoginScreen.navigationOptions = (navData) => {
	return {
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
			<Item title='menu' iconName='ios-menu' onPress={() => navData.navigation.toggleDrawer()}/>
		</HeaderButtons>
		)
	}	
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Colors.primary,
		justifyContent: 'center',
		alignItems: 'center'
	},
	authContainer: {
		width: '80%',
		//height: '50%',
		maxWidth: 400,
		maxHeight: 400,
		padding: 20	
	},
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default LoginScreen;