//import * as actionTypes from './actionTypes';
import URLs from '../../constants/urls';
import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const LOGIN = 'LOGIN';
export const SIGN_UP = 'SIGN_UP';
export const LOGOUT = 'LOGOUT';
export const SET_PUSH_TOKEN = 'SET_PUSH_TOKEN'
export const AUTHENTICATE = 'AUTHENTICATE'

export const authenticate = (userId, token, user) => {
  return { type: AUTHENTICATE, userId: userId, token: token, user: user };
};

export const login = (email, password) => {
	return async dispatch => {
		console.log('in login ')
	
		let response = await axios.post(URLs.base.concat('/sessions'), { users: { email: email, password: password }});
		console.log(response)
		if(response.status != 200) {
			throw new Error('Something went wrong')
		}
		console.log(response)
		dispatch(authenticate(response.data.userId, response.data.jwt, response.data.user));

		saveDataToStorage(response.data.jwt, response.data.userId);
	}
}

export const signUp = (email, password) => {
	console.log('in signup')
	return async dispatch => {
		console.log('in signup dispatch')
    let response = await axios.post(URLs.base.concat('/registrations'), { users: { email: email, password: password }});
		console.log('after')
		if(response.status != 200) {
			throw new Error('Something went wrong')
		}
		dispatch(authenticate(response.data.userId, response.data.jwt, response.data.user))
		saveDataToStorage(response.data.jwt, response.data.userId);
	}
}

export const setPushToken = (token) => {
	return (dispatch, getState) => {
		axios.post(URLs.base.concat('/users/set_push_token'), 
			{ push_token: token }, {
			headers: {
				Authorization: 'Bearer ' + getState().auth.token
			}})
			.then(user => {
				return dispatch({ type: SET_PUSH_TOKEN, pushToken: user.data.push_token });
			})
			.catch(error => {
				console.log(error)
				return false;
		});
	}
}

export const logout = () => {
	return async dispatch => {
		await AsyncStorage.removeItem('userData');
		return dispatch({ type: LOGOUT });
	}
	
}

const saveDataToStorage = (token, userId) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      token: token,
      userId: userId
    })
  );
};

