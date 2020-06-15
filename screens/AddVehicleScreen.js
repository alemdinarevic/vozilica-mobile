import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';

import Input from "../components/UI/Input";
import Card from "../components/UI/Card";
import ConfirmButton from "../components/Buttons/ConfirmButton";

import Colors from '../constants/Colors';

const AddVehicleScreen = (props) => {
  return (
    <ScrollView>
			<View style={styles.screen}>
				<Card style={styles.inputsContainer}>
					<View style={styles.inputFieldCard}>
						<Text>Naslov</Text>
						<Input />
					</View>

					<View style={styles.inputFieldCard}>
						<Text>Dodaj slike</Text>
						{/* //Image picker */}
						<Input />
					</View>

					<View style={styles.inputFieldCard}>
						<Text>Cijena</Text>
						<Input />
					</View>

					<View style={styles.inputFieldCard}>
						<Text>Kategorija</Text>
						<ModalDropdown
							style={styles.modalDropdown}
							options={["Motocikl", "Automobil", "Kombi", "Minibus"]}
						/>
					</View>

					<View style={styles.inputFieldCard}>
						<Text>Brend</Text>
						<ModalDropdown
							style={styles.modalDropdown}
							options={["Audi", "BMW", "Mercedes", "Opel", "Renault", "VW"]}
						/>
					</View>

					<View style={styles.inputFieldCard}>
						<Text>Pogon</Text>
						<ModalDropdown
							style={styles.modalDropdown}
							options={["Benzin", "Dizel", "Plin", "Hibrid", "El. struja"]}
						/>
					</View>

					<View style={styles.inputFieldCard}>
						<Text>Transmisija</Text>
						<ModalDropdown
							style={styles.modalDropdown}
							options={["Manuelni", "Automatski"]}
						/>
					</View>

					<View style={styles.inputFieldCard}>
						<Text>Godina</Text>
						<ModalDropdown style={styles.modalDropdown} options={["Od", "Do"]} />
					</View>

					<ConfirmButton style={styles.confirmButton}>Objavi</ConfirmButton>

				</Card>

				
  	  </View> 
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
		flex: 1,
		height: '100%',
		backgroundColor: Colors.primary,
		padding: 50,
		paddingHorizontal: 20
	},
	inputsContainer: {
		backgroundColor: 'white',
	},
  inputFieldCard: {
		padding: 10,
		textAlign: 'center'
	},
	modalDropdown: {
		height: 50,
		borderColor: Colors.quaternary,
		borderWidth: 1,
		borderRadius: 10,
		marginVertical: 5,
		padding: 10
	},
	confirmButton: {
		margin: 10,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default AddVehicleScreen;
