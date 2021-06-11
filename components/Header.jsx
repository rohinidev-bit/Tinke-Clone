import React from "react"
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Shop from '../screens/Shop'
import About from '../screens/About'
import Navigator from '../routes/drawer'
export default function Header() {
	return (
		<View>
			<Image source={{ uri: 'https://cdn.shopify.com/s/files/1/0877/8598/files/logo.png?height=628&pad_color=fff&v=1592586793&width=1200' }} style={styles.logo} />
			<TouchableOpacity >
				<Navigator />
				<Text>
					<Icon name="ellipse-outline" size={30} />;
				</Text>
			</TouchableOpacity>


			<TouchableOpacity>
				<Text>
					<Icon name="menu-outline" size={30} />;
				</Text>
			</TouchableOpacity>
		</View>
	)

}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

