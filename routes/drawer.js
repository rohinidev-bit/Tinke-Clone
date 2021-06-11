import { createDrawerNavigator } from '@react-navigation/drawer'
import { createAppContainer } from "react-navigation"
import About from '../screens/About'
import aboutStack from './aboutStack'
import homeStack from './homeStack'
import shopStack from './shopStack'
const RootDrawerNavigator = createDrawerNavigator({
	Home: {
		screen: homeStack
	},
	About: {
		screen: aboutStack
	},
	Shop: {
		screen: shopStack
	}
})
export default createAppContainer(RootDrawerNavigator)