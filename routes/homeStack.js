import React from "react"
import Home from '../screens/Home'
import { createStackNavigator } from '@react-navigation/stack'
const screens = {
	Home: {
		screen: Home,
		navigationOptions: {
			title: 'Home'
		}
	}
}
const homeStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerTintColor: '#444',
		headerStyle: { backgroundColor: "#eee", height: 60 }
	}
})
export default homeStack