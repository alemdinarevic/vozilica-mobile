import React from 'react';
import {ScrollView, View, Text, StyleSheet, KeyboardAvoidingView, Button} from 'react-native';

import Colors from '../constants/Colors';

import Input from '../components/UI/Input';
import Card from '../components/UI/Card';

import ConfirmButton from '../components/Buttons/ConfirmButton';

const AuthScreen = (props) => {
	return (
		<KeyboardAvoidingView 
			style={styles.screen} 
			behavior='padding' 
			keyboardVerticalOffset={50}
		>
			<Card style={styles.authContainer}>
				<ScrollView>
				<Input 
						id='username' 
						label='username' 
						placeholder='Your username'
						keyboardType='default' 
						//required
						//email
						autoCapitalize='none' 
						errorMessage='Please enter a valid username'
						onInputChange={() => {}}
						initialValue=''
					/>

					<Input 
						id='email' 
						label='E-mail' 
						placeholder='Your e-mail'
						keyboardType='email-address' 
						//required
						//email
						autoCapitalize='none' 
						errorMessage='Please enter a valid e-mail address'
						onInputChange={() => {}}
						initialValue=''
					/>

					<Input 
						id='password' 
						label='Password'
						placeholder='Your password'
						keyboardType='default' 
						secureTextEntry={true}
						//required
						minLength={5}
						autoCapitalize='none' 
						errorMessage='Please enter a valid password'
						onInputChange={() => {}}
						initialValue=''
					/>

					<Input 
						id='confirmPassword' 
						label='confirmPassword'
						placeholder='Your password again'
						keyboardType='default' 
						secureTextEntry={true}
						//required
						minLength={5}
						autoCapitalize='none' 
						errorMessage='Please enter a valid password'
						onInputChange={() => {}}
						initialValue=''
					/>
					<View style={styles.buttonContainer}>
					<ConfirmButton 
						style={{marginVertical: 10}}
						onPress={() => props.navigation.navigate({routeName: 'UserProfile'})}>
							Nastavi
					</ConfirmButton>

					<ConfirmButton 
						style={{width: 115}}
						onPress={() => props.navigation.navigate({routeName: 'Auth'})}>
							Prijavi se
					</ConfirmButton>
					</View>
					
					
				</ScrollView>
			</Card>
		</KeyboardAvoidingView>
	);
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
		maxHeight: 500,
		padding: 20	
	},
	buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default AuthScreen;