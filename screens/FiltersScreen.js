import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';
//import Calendars from '../components/Calendars';
import {Calendar} from 'react-native-calendars';
import Card from '../components/UI/Card';
import Colors from '../constants/Colors';

const FiltersScreen = (props) => {
	return(
		<ScrollView contentContainerStyle={styles.screen}>
			<Card style={styles.filtersContainer}>

				<View style={styles.filterContainer}>
					<Text>Kategorija</Text>
					<ModalDropdown style={styles.filter} options={['Motocikl', 'Automobil', 'Kombi', 'Minibus']}/>
				</View>
				
				<View style={styles.filterContainer}>
					<Text>Brand</Text>
					<ModalDropdown style={styles.filter} options={['Audi', 'BMW', 'Mercedes', 'Opel', 'Renault', 'VW']}/>
				</View>


				<View style={styles.filterContainer}>
					<Text>Cijena</Text>
					<ModalDropdown style={styles.filter} options={['Od', 'Do']}/>
				</View>

				<View style={styles.filterContainer}>
					<Text>Pogon</Text>
					<ModalDropdown style={styles.filter} options={['Benzin', 'Dizel', 'Plin', 'Hibrid', 'El. struja']}/>
				</View>

				<View style={styles.filterContainer}>
					<Text>Transmisija</Text>
					<ModalDropdown style={styles.filter} options={['Manuelni', 'Automatski']}/>
				</View>

				<View style={styles.filterContainer}>
					<Text>Godina</Text>
					<ModalDropdown style={styles.filter} options={['Od', 'Do']}/>
				</View>

				<Text>Dostupnost</Text>
			</Card>
			<Calendar />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.primary
	},
	filtersContainer: {
		flexDirection: 'row',
		display: 'flex',
		flexWrap: 'wrap',
		paddingVertical: 15,
		paddingHorizontal: 20,
		marginTop: 0,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'stretch',
		width: '65%'
	},
	filterContainer: {
		width: '49%',
		padding: 10,
		borderColor: Colors.quaternary,
		borderBottomWidth: 1
	},
	filter: {
		
	}
});

export default FiltersScreen;