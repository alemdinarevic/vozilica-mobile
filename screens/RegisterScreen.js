import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Button
} from "react-native";

import { showMessage } from "react-native-flash-message";

import * as authActions from "../store/actions/auth";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import Colors from "../constants/Colors";

import Input from "../components/UI/Input";
import Card from "../components/UI/Card";

import ConfirmButton from "../components/Buttons/ConfirmButton";
import HeaderButton from "../components/Buttons/HeaderButton";

const RegisterScreen = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	//to be implemented
	//const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const authHandler = () => {
    let action = authActions.signUp(email, password);
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
        console.log("IN CATCH OF DISPATCH auth actions");
        setError(error.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    console.log("in use effect of error change");
    if (error) {
      showMessage({
        message: error,
        type: "danger",
      });
    }
	}, [error]);


  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior="padding"
      keyboardVerticalOffset={50}
    >
      <Card style={styles.authContainer}>
        <ScrollView>
          <Input
            id="username"
            label="username"
            placeholder="Your username"
            keyboardType="default"
            //required
            //email
            autoCapitalize="none"
            errorMessage="Please enter a valid username"
            onChangeText={(text) => setUsername(text)}
            initialValue=""
          />
          <Text>{email}</Text>
          <Input
            id="email"
            label="E-mail"
            placeholder="Your e-mail"
            keyboardType="email-address"
            //required
            //email
            autoCapitalize="none"
            errorMessage="Please enter a valid e-mail address"
            onChangeText={(text) => setEmail(text)}
            initialValue=""
          />
          <Text>{password}</Text>
          <Input
            id="password"
            label="Password"
            placeholder="Your password"
            keyboardType="default"
            secureTextEntry={true}
            //required
            minLength={5}
            autoCapitalize="none"
            errorMessage="Please enter a valid password"
            onChangeText={(text) => setPassword(text)}
            initialValue=""
          />

          <Input
            id="confirmPassword"
            label="confirmPassword"
            placeholder="Your password again"
            keyboardType="default"
            secureTextEntry={true}
            //required
            minLength={5}
            autoCapitalize="none"
            errorMessage="Please enter a valid password"
            onChangeText={(text) => setPassword(text)}
            initialValue=""
          />
          <View style={styles.buttonContainer}>
            <ConfirmButton
              style={{ marginVertical: 10 }}
              //onPress={() =>
                //props.navigation.navigate({ routeName: "UserProfile" })
							//}
							onPress={authHandler}
            >
              Nastavi
            </ConfirmButton>

            <ConfirmButton
              style={{ width: 115 }}
              onPress={() => props.navigation.navigate({ routeName: "Login" })}
            >
              Prijavi se
            </ConfirmButton>
          </View>
        </ScrollView>
      </Card>
    </KeyboardAvoidingView>
  );
};

RegisterScreen.navigationOptions = (navData) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  authContainer: {
    width: "80%",
    //height: '50%',
    maxWidth: 400,
    maxHeight: 500,
    padding: 20,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RegisterScreen;
