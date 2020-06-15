import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Card from "../components/UI/Card";
import Colors from '../constants/Colors';
const MiscellaneousScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Card>
        <Text>Miscellaneous</Text>
        <Text>About Ducats</Text>
        <Text>
          Ducats are basically the currency of vozilica.ba. Pay few ducats and
          get a reservation. Everybody gets 20 ducats for free in the beginning.
        </Text>
        <Text>
          Dukati su valuta vozilice. Plati par dukata, i bukiraj auto. Svako
          dobije 20 dukata besplatno iz pocetka.
        </Text>
  	  </Card>
		</View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.primary
  },
});

export default MiscellaneousScreen;
