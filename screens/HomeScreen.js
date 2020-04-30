import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, Text, Button} from 'react-native';

import DateTimePickerModal from "react-native-modal-datetime-picker";

import Input from '../components/UI/Input';
import Card from '../components/UI/Card';
import DatePickerButton from '../components/Buttons/DatePickerButton';
import ConfirmButton from '../components/Buttons/ConfirmButton';

import Colors from '../constants/Colors';

const HomeScreen = (props) => {

	const [enteredAddress, setEnteredAddress] = useState('');

	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
	const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

	const enteredAddressHandler = (value) => {
		setEnteredAddress(value);
		//console.log(value);
	};

	// from date functions
  const showStartDatePicker = () => {
    setStartDatePickerVisibility(true);
	};

	const hideStartDatePicker = () => {
    setStartDatePickerVisibility(false);
	};

	const handleStartDatePickerConfirm = (date) => {
		console.warn("A date has been picked: ", date);
		setStartDate(date);
    hideStartDatePicker();
	};

	//end date functions
	const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };
	
	const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
  };

	const handleEndDatePickerConfirm = (date) => {
		console.warn("A date has been picked: ", date);
		setEndDate(date);
    hideEndDatePicker();
  };

  return (
		<ScrollView contentContainerStyle={styles.screen}>

			<View style={styles.welcomeTextContainer}>
				<Text style={styles.welcomeText1}>Dobrodošli na našu aplikaciju za rentanje vozila, pionirsku na našem tržištu.</Text>
				<Text style={styles.welcomeText2}>NAPRAVI SVOJU REZERVACIJU</Text>
			</View>

			<Card style={styles.inputContainer}>

				<Input 
					style={styles.inputAddress}
					placeholder='Unesi adresu'
					value={enteredAddress}
					onChangeText={enteredAddressHandler}
				/>

				<View style={styles.fromView}>
					<DatePickerButton onPress={showStartDatePicker}>
						Od
					</DatePickerButton>
					<DateTimePickerModal
						isVisible={isStartDatePickerVisible}
						mode="datetime"
						onConfirm={handleStartDatePickerConfirm}
						onCancel={hideStartDatePicker}
					/>
    			</View>
				
				<View style={styles.toView}>
					<DatePickerButton onPress={showEndDatePicker}>
						Do 
					</DatePickerButton>

					<DateTimePickerModal
						isVisible={isEndDatePickerVisible}
						mode="datetime"
						onConfirm={handleEndDatePickerConfirm}
						onCancel={hideEndDatePicker}
					/>
    			</View>

				<View>
					<Text>{startDate.toString()} - {endDate.toString()}</Text>
				</View>

				<ConfirmButton
					onPress={() => props.navigation.navigate({routeName: 'Filters'})}>
						Potvrdi
				</ConfirmButton>

			</Card>

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
		fontSize: 16,
		textAlign: 'center',
		marginBottom: 10
	},
	welcomeText2: {
		color: 'white',
		fontSize: 38,
		textAlign: "center",
		marginTop: 30
	},
	inputContainer: {
		backgroundColor: 'white',
		alignItems: 'center',
		width: '85%',
		height: 300,
		paddingTop: 10
	},
	inputAddress: {
		width: '80%'
	},
	fromView: {
		marginVertical: 5,
	},
	toView: {
		marginVertical: 5
	}
});
export default HomeScreen;