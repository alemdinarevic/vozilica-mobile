import React from 'react';

import {Ionicons, EvilIcons, MaterialIcons} from '@expo/vector-icons';

import {createAppContainer} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createSwitchNavigator } from 'react-navigation-switch-transitioner'

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import FiltersScreen from '../screens/FiltersScreen';
import FilteredResultsScreen from '../screens/FilteredResultsScreen';
import InboxScreen from '../screens/InboxScreen';
import AddVehicleScreen from '../screens/AddVehicleScreen';
import VehicleDetailsScreen from '../screens/VehicleDetailsScreen';
import MiscellaneousScreen from '../screens/MiscellaneousScreen';
import StartupScreen from '../screens/StartupScreen';

import Header from '../components/Header';
import Logo from '../components/Logo';
import Colors from '../constants/Colors';



const defaultStackNavigatorOptions = {
	headerStyle: {
		backgroundColor: Colors.secondary
	},
	headerTintColor: 'white'
}

const HomeFiltersSearchNavigator = createStackNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			title: 'Vozilica'
		}
	},
	Filters: {
		screen: FiltersScreen,
		navigationOptions: {
			title: 'Prilagodi filtere'
		}
	},
	FilteredResults: {
		screen: FilteredResultsScreen,
		navigationOptions: {
			title: 'Filtrirani rezultati'
		}
	},
	VehicleDetails: {
		screen: VehicleDetailsScreen,
		navigationOptions: {
			title: 'Detalji o vozilu'
		}
	}
}, {
	defaultNavigationOptions: {
		...defaultStackNavigatorOptions,
		title: 'Home'
	}
	});

const UserAuthNavigation = createStackNavigator({
	Login: {
		screen: LoginScreen,
		navigationOptions: {
			title: 'Prijavi se'
		}
	},
	Register: {
		screen: RegisterScreen,
		navigationOptions: {
			title: 'Registruj se'
		}
	},
}, {
	defaultNavigationOptions: defaultStackNavigatorOptions
	}
);

// when clicking on vehicle details, the back button brings it back to home, instead of userprofile. FIX!
// const UserVehicleNavigator = createStackNavigator({
// 	User: UserProfileScreen,
// 	VehicleDetails: {
// 		screen: VehicleDetailsScreen,
// 		navigationOptions: {
// 			title: 'Detalji o vozilu'
// 		}
// 	}
// })

const BottomTabNavigator = createBottomTabNavigator({
	HomeFiltersSearch: {
		screen: HomeFiltersSearchNavigator, 
		navigationOptions: {
			title: 'Home',
			tabBarIcon: (tabInfo) => {return <Ionicons name='md-home' size={20} color={tabInfo.tintColor}/>}
		}
	},

	User: {
		screen: UserProfileScreen,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {return <EvilIcons name='user' size={20} color={tabInfo.tintColor}/>}
		}
	}, 

	AddVehicle: {
		screen: AddVehicleScreen,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {return <Ionicons name='md-add' size={20} color={tabInfo.tintColor}/>}
		}
	},

	Inbox: {
		screen: InboxScreen,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {return <MaterialIcons name='local-post-office' size={20} color={tabInfo.tintColor}/>}
		}
	},

	Miscellaneous: {
		screen: MiscellaneousScreen,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {return <Ionicons name='ios-help-circle-outline' size={20} color={tabInfo.tintColor}/>}
		}
	}, 
}, {
	tabBarOptions: {
		activeTintColor: Colors.tertiary
	}
});

const LeftSideDrawerNavigator = createDrawerNavigator({
	Home: BottomTabNavigator,
	Authentication: UserAuthNavigation
});

const MainNavigator = createSwitchNavigator({
  StartupScreen: StartupScreen,
  LeftSideDrawerNavigator: LeftSideDrawerNavigator
});


export default createAppContainer(MainNavigator);