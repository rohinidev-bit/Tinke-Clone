import React from "react"
import About from '../screens/About'
import { createStackNavigator } from '@react-navigation/stack'
const screens = {
	Home: {
		screen: About,
		navigationOptions: {
			title: 'About'
		}
	}
}
const aboutStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerTintColor: '#444',
		headerStyle: { backgroundColor: "#eee", height: 60 }
	}
})
export default aboutStack