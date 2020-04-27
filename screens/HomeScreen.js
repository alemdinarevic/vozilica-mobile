import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';

import DatePicker from 'react-native-date-picker';

import Input from '../components/Input';
import Calendars from '../components/Calendars';

import Colors from '../constants/Colors';

const HomeScreen = (props) => {

	const [enteredAddress, setEnteredAddress] = useState('');
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const enteredAddressHandler = () => {};

  return (
		<ScrollView contentContainerStyle={styles.screen}>

			<View style={styles.welcomeTextContainer}>
				<Text style={styles.welcomeText1}>NAPRAVI SVOJU REZERVACIJU</Text>
				<Text style={styles.welcomeText2}>Dobrodošli na najveću aplikaciju za rentanje vozila na našem tržištu.</Text>
			</View>

			<View style={styles.inputContainer}>

				<Input 
					style={styles.inputAddress}
					placeholder='Unesi adresu'
					value={enteredAddress}
					onChangeText={enteredAddressHandler}
				/>

				<DatePicker 
					date={startDate}
					onDateChange={setStartDate}
				/>

				<DatePicker 
					date={endDate}
					onDateChange={setEndDate}
				/>



				{/* <Calendars /> */}
			</View>

		</ScrollView>
		
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: Colors.primary
	},
	welcomeTextContainer: {
		width: '85%',
		alignItems: 'center',
		alignContent: 'center'
	},
	welcomeText1: {
		color: 'white',
		fontSize: 38,
		textAlign: 'center'
	},
	welcomeText2: {
		fontSize: 16,
		textAlign: "center"
	},
	inputContainer: {
		backgroundColor: 'white',
		alignItems: 'center',
		width: '85%',
		height: 300
	}
});
export default HomeScreen;