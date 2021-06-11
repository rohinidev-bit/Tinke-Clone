import React from "react"
import Shop from '../screens/Shop'
import { createStackNavigator } from '@react-navigation/stack'
const screens = {
	Home: {
		screen: Shop,

		title: 'Shop'

	}
}
const shopStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerTintColor: '#444',
		headerStyle: { backgroundColor: "#eee", height: 60 }
	}
})
export default shopStack