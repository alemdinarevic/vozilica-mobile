import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment';

import Input from '../components/UI/Input';
import Card from '../components/UI/Card';
import DatePickerButton from '../components/Buttons/DatePickerButton';
import ConfirmButton from '../components/Buttons/ConfirmButton';
import HeaderButton from '../components/Buttons/HeaderButton';

import Colors from '../constants/Colors';

const HomeScreen = (props) => {
	let token = useSelector(state => state.auth.userId)
	const [enteredAddress, setEnteredAddress] = useState('');

	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
	const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

	const enteredAddressHandler = (value) => {
		setEnteredAddress(value);
		//console.log(value);
	};

	// start date functions
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

			{/* <Text>{token}</Text> */}

			<Card style={styles.inputContainer}>

				<Input 
					style={styles.inputAddress}
					placeholder='Unesi adresu'
					value={enteredAddress}
					onChangeText={enteredAddressHandler}
				/>

				<View style={styles.pickerContainer}>
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
					</View>
			

				<View style={styles.chosenStartEndDateContainer}>
					<Text>{moment(startDate).format('LLL')}</Text>
					<Text>-</Text>
					<Text>{moment(endDate).format('LLL')}</Text>
				</View>

				<View style={styles.confirmButtonContainer}>
					<ConfirmButton
						onPress={() => props.navigation.navigate({routeName: 'Filters'})}>
							Potvrdi
					</ConfirmButton>
				</View>

			</Card>
		</ScrollView>
		
	);
}

HomeScreen.navigationOptions = (navData) => {
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
	pickerContainer: {
		marginVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		
	},
	fromView: {
		marginVertical: 5,
		marginHorizontal: 15
	},
	toView: {
		marginVertical: 5,
		marginHorizontal: 15
	},
	chosenStartEndDateContainer: {
		marginVertical: 5,
		alignItems: 'center'
	},
	confirmButtonContainer: {
		marginTop: 20
	}
});
export default HomeScreen;